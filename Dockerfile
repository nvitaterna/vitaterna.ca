# Base stage for building the static files
FROM node:24-alpine AS base
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

# Runtime stage for serving the application
FROM nginx:alpine AS runtime
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE 80
