import cv2
import numpy
import socket
import struct
import threading
from io import BytesIO


class Streamer(threading.Thread):

    def __init__(self, hostname, port):
        threading.Thread.__init__(self)

        self.hostname = hostname
        self.port = port
        self.running = False
        self.streaming = False
        self.jpeg = None

    def run(self):

        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        print('Socket created')

        s.bind((self.hostname, self.port))
        print('Socket bind complete')

        s.listen(10)
        print('Socket now listening')
        self.running = True

        while self.running:
            print('Start listening for connections...')

            conn, addr = s.accept()
            print("New connection accepted.")

            data = b""
            payload_size = struct.calcsize(">L")
            print("payload_size: {}".format(payload_size))

            while True:
                while len(data) < payload_size:
                    print("Recv: {}".format(len(data)))
                    data += conn.recv(4096)
                
                if data:
                    print("Done Recv: {}".format(len(data)))
                    packed_msg_size = data[:payload_size]
                    data = data[payload_size:]
                    msg_size = struct.unpack(">L", packed_msg_size)[0]
                    print("msg_size: {}".format(msg_size))
                    while len(data) < msg_size:
                        data += conn.recv(4096)

                    frame_data = data[:msg_size]
                    data = data[msg_size:]

                    frame=pickle.loads(frame_data, fix_imports=True, encoding="bytes")
                    frame = cv2.imdecode(frame, cv2.IMREAD_COLOR)

                    ret, jpeg = cv2.imencode('.jpg', frame)
                    self.jpeg = jpeg

                    self.streaming = True
                else:
                    conn.close()
                    print('Closing connection...')
                    self.streaming = False
                    self.running = False
                    self.jpeg = None
                    break

        print('Exit thread.')

    def stop(self):
        self.running = False

    def get_jpeg(self):
        return self.jpeg.tobytes()