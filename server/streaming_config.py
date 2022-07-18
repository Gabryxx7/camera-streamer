import sys
import oyaml as yaml

f = open('config.no-commit.yaml') 
print(f"\n\n----- CONFIG ------")
data = yaml.load(f, Loader=yaml.FullLoader)
print(f"data: {data}")
domain = data.get("domain", "")
print(f"domain: {domain}")
port = data.get("port", "")
print(f"port: {port}")
full_chain_path =  f"/etc/letsencrypt/live/{domain}/fullchain.pem"
print(f"full_chain_path: {full_chain_path}")
priv_path =  f"/etc/letsencrypt/live/{domain}/privkey.pem"
print(f"priv_path: {priv_path}")
templates_folder_rel= data.get("templates_folder_rel", "")
print(f"templates_folder_rel: {templates_folder_rel}")
react_folder = data.get("react_folder", "")
print(f"react_folder: {react_folder}")
async_mode = data.get("async_mode", "")
print(f"async_mode: {async_mode}")
socket_room= data.get("socket_room", "")
print(f"socket_room: {socket_room}")
print(f"----- END CONFIG ------\n\n")