FROM node:alpine as development

WORKDIR /dingbat
COPY package.json yarn.lock ./
RUN yarn install
CMD [ "yarn", "start" ]


FROM development as build
COPY . $APP_HOME
RUN yarn && yarn run build

FROM build as production
COPY --from=build /build /build
CMD [ "yarn", "run", "start:prod" ]
