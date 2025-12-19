<img width="1860" height="915" alt="Snipaste_2025-12-20_00-24-17" src="https://github.com/user-attachments/assets/854d725f-60a5-4c05-a4b2-f5e40e3d69b7" />
<img width="1860" height="915" alt="Snipaste_2025-12-20_00-24-31" src="https://github.com/user-attachments/assets/9b1a0ea9-7aed-44cd-a9a8-302a4692bf08" />

## 项目待更新

连接云服务器 创建项目目录并跳转到该目录 -p是代表没有父目录时也创建父目录

mkdir -p /data/项目名称 && cd /data/项目名称

**运行创建文件和文件夹的bat脚本**，**复制粘贴完代码**之后把项目文件夹**上传到data**文件夹下面

创建脚本并添加执行权限

chmod +x [deploy.sh](http://deploy.sh)

执行部署

./deploy.sh



添加入站规则 tcp协议3001端口开放

## ✅ 完成后的访问地址

| 服务       | 地址                              |
| ---------- | --------------------------------- |
| 🌐 前端     | `http://your-server-ip`           |
| 🔧 API 文档 | `http://your-server-ip:8000/docs` |
| 📊 监控面板 | `http://your-server-ip:3001`      |

# 查看所有容器的日志
docker-compose logs --tail=30
