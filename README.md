 # Pm2 Application Monitoring with Prometheus & Grafana and PM 2 logs with Loki and Promtail on Grafana Dashboard
This repository contains configuration files and a docker-compose file for setting up a monitoring stack using Prometheus, Loki, and Promtail.

###To get the PM2 Metrics on the Grafana Dashboard 
### Frist Install the PM2 Metrics Exporter
### Easy Install with PM2
```
pm2 install pm2-metrics
```

#Open your browser

```
http://<HOST>:9209/metrics
```
### Second create the docker-compose.yaml 

### Third create the prometheus.yaml For Prometheus Config
### Foruth Run the docker-compose.yaml 
```
docker-compose up -d
```

