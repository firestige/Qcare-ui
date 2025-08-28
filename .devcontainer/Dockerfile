FROM node:22.18

# 安装常用工具
RUN apt-get update && \
    apt-get install -y git curl && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /workspace

CMD [ "bash" ]

