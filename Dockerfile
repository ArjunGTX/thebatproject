FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN apk add --no-cache libc6-compat
RUN npm ci
COPY . .

ENV NODE_ENV=production

RUN npm run build

FROM node:20-alpine

WORKDIR /app
EXPOSE 3000

COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.ts ./next.config.ts
COPY --from=build /app/package.json ./package.json

CMD ["npm", "start"]
