FROM node:10.16.3 as build

COPY soltak-backend/tsconfig.json /soltak/backend/tsconfig.json
COPY soltak-backend/package.json /soltak/backend/package.json
COPY soltak-backend/package-lock.json /soltak/backend/package-lock.json

WORKDIR /soltak/backend

RUN npm ci

COPY soltak-backend/src /soltak/backend/src

RUN npm run build

COPY soltak-frontend/public /soltak/frontend/public
COPY soltak-frontend/fuse.js /soltak/frontend/fuse.js
COPY soltak-frontend/tsconfig.json /soltak/frontend/tsconfig.json

COPY soltak-frontend/package.json /soltak/frontend/package.json
COPY soltak-frontend/package-lock.json /soltak/frontend/package-lock.json

WORKDIR /soltak/frontend

RUN npm ci

COPY soltak-frontend/src /soltak/frontend/src

RUN npm run build

FROM node:10.16.3-alpine

ENV NODE_ENV=production

COPY --from=build /soltak/backend/node_modules /soltak/node_modules
COPY --from=build /soltak/backend/dist /soltak/dist

COPY --from=build /soltak/frontend/build /soltak/public

WORKDIR /soltak

USER node

CMD ["node", "dist/index.js"]