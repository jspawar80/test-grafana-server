 # Pm2 Application Monitoring with Prometheus & Grafana and PM 2 logs with Loki and Promtail on Grafana Dashboard
This repository contains configuration files and a docker-compose file for setting up a monitoring stack using Prometheus, Loki, and Promtail.

### Files
docker-compose.yml: This file defines the services to run and how they are configured.
loki-config.yml: This file contains the configuration for the Loki log aggregation system.
loki-promtail-docker-compose.yml: This file extends the main docker-compose.yml file and includes a Promtail service to scrape logs from containers and send them to Loki.
prometheus.yml: This file contains the configuration for Prometheus.
promtail-config.yml: This file contains the configuration for Promtail.

### Usage
To start the monitoring stack, run the following command in the root directory of the project:

```
docker-compose up
```

This will start Prometheus, Loki, and Promtail with the configurations specified in the files mentioned above.

