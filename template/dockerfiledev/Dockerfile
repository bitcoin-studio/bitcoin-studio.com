# Based on https://github.com/alexellis/static-site-template
FROM openfaas/of-watchdog:0.7.7 AS watchdog

###
FROM janakasteph/nginx-nodejs AS runtime

COPY --from=watchdog /fwatchdog /usr/bin/fwatchdog
RUN chmod +x /usr/bin/fwatchdog

COPY ./function/nginx/* /etc/nginx/conf.d/
RUN echo -n "daemon off;" | tee -a /etc/nginx/nginx.conf

ENV fprocess="nginx"
ENV mode="http"
ENV upstream_url="http://127.0.0.1:8082"

CMD ["/usr/bin/fwatchdog"]