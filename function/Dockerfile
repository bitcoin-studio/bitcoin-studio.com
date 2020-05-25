# Based on https://github.com/alexellis/static-site-template
FROM openfaas/of-watchdog:0.7.7 AS watchdog

FROM nginxinc/nginx-unprivileged:1.17-alpine AS runtime
USER root
COPY --from=watchdog /fwatchdog /usr/bin/fwatchdog
RUN chmod +x /usr/bin/fwatchdog

WORKDIR /usr/share/nginx/html
# Make sure you have run `npm run build` before
COPY ./dist ./

COPY ./nginx/* /etc/nginx/conf.d/
RUN echo -n "daemon off;" | tee -a /etc/nginx/nginx.conf

ENV fprocess="nginx"
ENV mode="http"
ENV upstream_url="http://127.0.0.1:8082"

RUN chown -R nginx:nginx *

USER nginx

CMD ["/usr/bin/fwatchdog"]