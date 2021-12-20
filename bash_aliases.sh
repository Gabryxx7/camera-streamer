vscode_str="code-server --proxy-domain subdomain.domain.com"
flask_server_str="sudo python3 /home/ubuntu/camera-streamer/server/server_flask.py"

alias start_vscode="${vscode_str}"
alias start_vscoded="sudo nohup ${vscode_str} &"
alias start_flask_server="${flask_server_str}"
alias start_flask_serverd="sudo nohup ${flask_server_str} &"


alias edit_nginx_config="sudo nano /etc/nginx/sites-available/default"
alias reload_nginx="sudo nginx -t && sudo nginx -s reload"
