FROM debian:trixie

RUN apt-get update -y && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install git wget nano

RUN useradd -m -s /bin/bash node

USER node

WORKDIR /home/node

ENV HOME=/home/node
ENV ENV="$HOME/.profile"
ENV SHELL="/bin/bash"
ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV EDITOR="nano"

RUN wget -qO- https://get.pnpm.io/install.sh | bash -

RUN /home/node/.local/share/pnpm/pnpm setup

RUN /home/node/.local/share/pnpm/pnpm config set store-dir /home/node/.pnpm-store

RUN /home/node/.local/share/pnpm/pnpm env use --global lts

EXPOSE 3000