# homeassistant-config

![HomeAssistantDiagram](HomeAssistantDiagram.png?raw=true)

## [Home Assistant](http://home-assistant.io/) is the heart of this home
automation. It also contains the following components:

- [influxdb](https://www.influxdata.com/) ([container image](https://hub.docker.com/r/hypriot/rpi-influxdb/))
- [mqtt (mosquitto)](https://mosquitto.org/) ([container image](https://hub.docker.com/r/fstehle/rpi-mosquitto/))
- [appdaemon](https://appdaemon.readthedocs.io/en/latest/) ([container image](https://hub.docker.com/r/torkildr/rpi-appdaemon/))
- [grafana](https://grafana.com/) ([container image](https://hub.docker.com/r/heziegl/rpi-grafana/))
- [docker-hub-rss](https://github.com/chauffer/docker-hub-rss) (Locally built docker image)
- [NodeRED](https://nodered.org/) (Locally built docker image)
- [Pi-Hole](https://pi-hole.net/) (Installed locally)

## Docker-Compose
Since docker is stateless, I use a docker-compose.yml file to maintain configuration.

```yaml
version: "3.4"
services:
  homeassistant:
    image: homeassistant/raspberrypi3-homeassistant:0.61.1
    depends_on:
      - mqtt
      - influxdb
    volumes:
      - /home/<user>/.homeassistant:/config
      - /home/<user>/src/dehydrated:/home/<user>/src/dehydrated
      - /etc/localtime:/etc/localtime:ro
      - /dev/serial/by-id/usb-1234_5678-aa00:/dev/serial/by-id/usb-1234_5678-aa00
    privileged: true
    network_mode: host

  mqtt:
    image: fstehle/rpi-mosquitto:latest
    restart: unless-stopped
    volumes:
      - /home/<user>/.homeassistant/mqtt/config:/mqtt/config:ro
      - /home/<user>/.homeassistant/mqtt/data:/mqtt/data
      - /home/<user>/.homeassistant/mqtt/passwd:/mqtt/passwd
      - /home/<user>/src/dehydrated/certs:/mqtt/conf/certs
    ports:
      - 1883:1883
      - 8883:8883
      - 9001:9001

  influxdb:
    image: hypriot/rpi-influxdb
    volumes:
      - /mnt/influxdb:/data
    environment:
      PRE_CREATE_DB: "home-assistant"
    ports:
      - 8086:8086

  grafana:
    image: heziegl/rpi-grafana:3.1.1
    restart: unless-stopped
    depends_on:
      - influxdb
    volumes:
      - /mnt/influxdb/grafana/etc:/etc/grafana
      - /mnt/influxdb/grafana/data:/data
    ports:
      - 3000:3000

  nodered:
    image: mynodered
    volumes:
      - /home/<user>/src/dehydrated/certs/<user>.duckdns.org/fullchain.pem:/var/certs/fullchain.pem:ro
      - /home/<user>/src/dehydrated/certs/<user>.duckdns.org/privkey.pem:/var/certs/privkey.pem:ro
      - /mnt/influxdb/nodered:/data
    ports:
      - 1880:1880

  appdaemon:
    image: torkildr/rpi-appdaemon:latest
    volumes:
      - /home/<user>/.homeassistant/appdaemon:/conf
      - /home/<user>/src/dehydrated/certs/<user>.duckdns.org/fullchain.pem:/var/certs/fullchain.pem:ro
      - /home/<user>/src/dehydrated/certs/<user>.duckdns.org/privkey.pem:/var/certs/privkey.pem:ro
    ports:
      - 5050:5050
      - 5000:5000

  docker-hub-rss:
    image: docker-hub-rss
    ports:
      - 8181:80
```

## Pi-Hole
To get around NAT issues, I've decided to use [Pi-Hole](https://pi-hole.net/)
which also has the added benefit of blocking Ads. There are a few caveats. First
you need to add the following to `/etc/resolv.conf`:

```
nameserver 127.0.0.1
```

This will allow the pi to use itself as a DNS resolver. (Pi-Hole itself should
be setup to query an external DNS resolver by IP address) You can then setup your
gateway to pass out the address of the Raspberry Pi for DNS. (The Raspberry Pi
should be setup with a static IP)
