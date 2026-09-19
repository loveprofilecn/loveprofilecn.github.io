# 恋爱脑浓度测试 / LOVE BRAIN INDEX

一款面向年轻用户的免费中文恋爱心理自我探索网站。用户完成 24 道生活化情境题后，会获得综合指数、八维心理图谱、恋爱人格、三个隐藏指数、关系风险矩阵、恋爱能量分布、风险与保护因素，以及动态生成的深度关系分析。

> 本项目仅供娱乐与自我探索，不构成心理诊断、医疗建议或专业心理咨询。

## 技术栈

- React 19 + TypeScript
- Next.js 兼容路由（vinext 构建）
- Tailwind CSS 4
- Recharts
- localStorage（仅保存答题进度与最近一次报告）

项目无登录、无数据库、无外部 API、无支付、无个人身份信息收集，全部评分在浏览器内完成。

## 目录结构

```text
app/                  首页、测试页、结果页与全局样式
components/results/   Gauge、雷达图、维度条、矩阵、Donut、分享卡等
data/                 24 道题、维度文案、等级与 8 种人格原型
lib/                  标准化、综合评分、衍生指标、人格匹配、洞察与存储
types/                完整 TypeScript 领域类型
tests/                渲染与评分逻辑测试
public/               favicon 等静态资源
```

## 本地运行

要求 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

打开终端显示的本地地址（通常为 `http://localhost:3000`）。

## 质量检查与构建

```bash
npm run lint
npm run test:logic
npm run build
```

生产构建产物由 vinext 生成，可用 `npm start` 本地验证。

## 评分模型

每个答案可同时影响多个维度。每个维度使用其全部题目的理论最低分、理论最高分与用户原始分标准化至 0–100。综合指数采用加权模型：依恋焦虑 20%、情绪依赖 20%、过度投入 15%、关系敏感 10%、失去恐惧 15%、爱情理想化 10%、反向自我边界 5%、反向自我保持 5%。人格识别使用用户八维向量与 8 个人格原型之间的欧氏距离，而不是总分分档。

## 上传 GitHub

```bash
git init
git add .
git commit -m "feat: build love brain index"
git branch -M main
git remote add origin https://github.com/你的账号/你的仓库.git
git push -u origin main
```

请勿提交本地缓存、构建产物或环境文件；`.gitignore` 已覆盖常见目录。

## 部署

该项目是无后端、无平台专属数据能力的前端应用，可部署到支持 Node 构建或静态前端托管的服务。通用流程：

1. 连接 GitHub 仓库或上传项目。
2. 安装命令设为 `npm install`。
3. 构建命令设为 `npm run build`。
4. 按托管平台对 vinext/Vite 产物的说明设置输出目录或运行 `npm start`。

仓库未接入平台专属 API，未来可按目标平台改用 Next.js 静态导出或对应 Vite 适配器，评分与报告代码无需改变。
