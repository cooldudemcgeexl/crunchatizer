FROM node:lts


WORKDIR /var/buildDir

COPY package.json postcss.config.js svelte.config.js tailwind.config.ts tsconfig.json vite.config.ts yarn.lock .yarnrc.yml ./
COPY .yarn/ ./.yarn
COPY src/ ./src
COPY static/ ./static
RUN yarn install
RUN yarn build

COPY ./build /var/crunch/build
COPY .yarn/ /var/crunch/.yarn
COPY package.json yarn.lock .yarnrc.yml /var/crunch/
WORKDIR /var/crunch

RUN yarn workspaces focus --production

ENTRYPOINT [ "node", "build"]