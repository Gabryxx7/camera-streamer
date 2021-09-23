from PIL import Image

class ImgProc(object):
    def __init__(self):
        pass

    def apply_processing(self, img):
        return img.transpose(Image.FLIP_LEFT_RIGHT)