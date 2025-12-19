#!/bin/bash
echo "🚀 开始部署..."

if [ ! -f /swapfile ]; then
    echo "📝 创建 2GB swap..."
    sudo fallocate -l 2G /swapfile
    sudo chmod 600 /swapfile
    sudo mkswap /swapfile
    sudo swapon /swapfile
    echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
fi

cd /data/myproject
docker-compose down 2>/dev/null
docker-compose build --no-cache
docker-compose up -d

sleep 10
echo "✅ 部署完成！"
echo "🌐 前端: http://your-ip"
echo "🔧 API: http://your-ip/api"
echo "📊 监控: http://your-ip:3001"
docker stats --no-stream
