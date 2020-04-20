FROM openfaas/of-watchdog:0.7.7 AS watchdog
FROM node:12-alpine AS build

WORKDIR /root/

# Turn down the verbosity to default level.
ENV NPM_CONFIG_LOGLEVEL warn

COPY package.json ./

RUN npm i --production

COPY ./ ./

RUN NODE_ENV=production npm run build

###
FROM alpine:3.10 AS runtime

COPY --from=watchdog /fwatchdog /usr/bin/fwatchdog
RUN chmod +x /usr/bin/fwatchdog

# Add non root user
RUN addgroup -S app && adduser app -S -G app
RUN chown app /home/app

WORKDIR /home/app/

USER app

COPY --from=build /root/build /home/app/build

ENV mode="static"
ENV static_path="/home/app/build"

ENV exec_timeout="10s"
ENV write_timeout="11s"
ENV read_timeout="11s"

HEALTHCHECK --interval=5s CMD [ -e /tmp/.lock ] || exit 1

CMD ["fwatchdog"]
