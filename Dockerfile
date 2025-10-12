FROM zenika/alpine-chrome 

USER root

RUN apk add --no-cache --update nodejs npm graphicsmagick ghostscript caddy

WORKDIR /app

RUN npm install -g pnpm
RUN mkdir -p /app/frontend

COPY ./apps/frontend/.output /app/frontend

RUN mkdir -p /tmp/backendbuilder/apps/backend
RUN mkdir -p /tmp/backendbuilder/packages/
COPY ./apps/backend/build /tmp/backendbuilder/apps/backend
COPY ./packages /tmp/backendbuilder/packages
COPY ./package.json /tmp/backendbuilder
COPY ./pnpm-workspace.yaml /tmp/backendbuilder

WORKDIR /tmp/backendbuilder/apps/backend
RUN pnpm install --prod --force

RUN mv /tmp/backendbuilder /app/backend

WORKDIR /app

COPY ./Caddyfile .
COPY ./entrypoint.sh .
ENTRYPOINT ["./entrypoint.sh"]
