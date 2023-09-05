FROM node:alpine3.18

WORKDIR /app

COPY package.json package-lock.json .eslintrc.js .prettierrc.js jest.config.js tsconfig.json ./

RUN --mount=type=cache,target=/app/.npm \
    npm set cache /app/.npm && \
    npm install

COPY ./src ./src

EXPOSE 8080

CMD ["npm", "run", "dev"]
