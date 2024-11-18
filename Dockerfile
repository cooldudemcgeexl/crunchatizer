FROM node:lts AS build


WORKDIR /app

COPY package.json postcss.config.js svelte.config.js tailwind.config.ts tsconfig.json vite.config.ts yarn.lock .yarnrc.yml ./
COPY .yarn/ ./.yarn
COPY src/ ./src
COPY static/ ./static
RUN yarn install
RUN yarn build

FROM node:lts AS run

ENV NODE_ENV=production

WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/.yarn ./.yarn
COPY --from=build /app/package.json /app/yarn.lock /app/.yarnrc.yml ./

EXPOSE 3000

RUN yarn workspaces focus --production

ENTRYPOINT [ "node", "build"]