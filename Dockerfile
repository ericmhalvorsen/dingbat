FROM node:alpine as development

COPY package.json yarn.lock ./
RUN yarn install
CMD [ "yarn", "start" ]


FROM development as build
COPY . $APP_HOME
RUN yarn && yarn run build

FROM build as production
COPY --from=build /bin/dist /bin/dist
CMD [ "yarn", "run", "start:prod" ]
