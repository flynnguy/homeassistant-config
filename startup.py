#!/usr/bin/env python3

import time
import os
import socket
from subprocess import call
from pathlib import Path

os.chdir(os.path.join(bytes(Path.home()), b'.homeassistant'))
# Make sure influxdb mountpoint is present
while not os.path.ismount("/mnt/influxdb"):
    print('sleeping')
    time.sleep(2)

# Startup influxdb and MQTT
call(["docker-compose", "up", "-d", "influxdb"])
call(["docker-compose", "up", "-d", "mqtt"])

# Wait for influxdb to startup
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
while sock.connect_ex(('127.0.0.1', 8086)) != 0:
    time.sleep(3)

# call(["docker-compose", "up", "-d",  "nodered"])
call(["docker-compose", "up", "-d", "appdaemon"])
call(["docker-compose", "up", "-d", "grafana"])
call(["docker-compose", "up", "-d", "docker-hub-rss"])

# Bring up HomeAssistant
call(["docker-compose", "up", "-d", "homeassistant"])
