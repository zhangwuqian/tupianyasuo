# 图片压缩网站

这是一个简单的在线图片压缩工具，支持以下功能：
- 支持上传 PNG、JPG 等格式的图片
- 可以预览原图和压缩后的图片
- 显示压缩前后的文件大小
- 支持自定义压缩比例
- 下载压缩后的图片

## 项目结构
- index.html: 主页面
- styles.css: 页面样式
- script.js: 图片压缩和处理逻辑

## 技术说明
- 使用原生 HTML5、CSS 和 JavaScript 开发
- 使用 Canvas API 进行图片压缩
- 采用响应式设计，适配各种设备 

## 部署说明

### 使用 GitHub Pages 部署（推荐）
1. 在 GitHub 创建一个新的仓库
2. 将项目文件上传到仓库
3. 进入仓库设置 (Settings)
4. 找到 "Pages" 选项
5. 在 "Source" 中选择 "main" 分支
6. 保存后等待几分钟，GitHub 会自动生成网站链接

访问地址：https://你的用户名.github.io/仓库名

### 使用 Vercel 部署
1. 注册 Vercel 账号：https://vercel.com
2. 点击 "New Project"
3. 导入你的 GitHub 仓库
4. 点击 "Deploy"
5. 等待部署完成

Vercel 会自动生成一个域名，类似：https://你的项目名.vercel.app

### 使用虚拟主机部署
1. 购买虚拟主机服务（如阿里云、腾讯云等）
2. 使用 FTP 工具（如 FileZilla）连接到主机
3. 将项目文件上传到网站根目录
4. 访问你的域名即可

注意：需要自己购买域名和虚拟主机服务