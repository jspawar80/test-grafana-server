# PM2 Metrics
--------------------------------------------------------------------

### Easy Install with PM2
```
pm2 install pm2-metrics
```

### Or Clone and run as a seperate application

```
$ git clone https://github.com/saikatharryc/pm2-prometheus-exporter.git
$ npm install
$ pm2 start exporter.js --name pm2-metrics
```
#Open your browser

```
http://<HOST>:9209/metrics
```

### For Prometheus Config

in prometheus.yaml inside scrape_configs add this block:

```
- job_name: pm2-metrics
scrape_interval: 10s
scrape_timeout: 10s
metrics_path: /metrics
scheme: http
static_configs:
  - targets:
      - localhost:9209
```
