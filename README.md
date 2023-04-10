# To get the PM2 Metrics on the Grafana Dashboard 
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

