# Civic Architecture Lab（公共制度架构实验室）

CAL — Institutional Design & Digital Public Infrastructure. Powered by Future Citizen Bureau.
独立站点，中英双语（EN / 中文），技术栈 Vite + React + TypeScript + Tailwind，视觉沿用 FCB 的深色＋金制度风。

## 本地运行 / Local dev

```bash
npm install
npm run dev        # http://localhost:3001
```

## 生产构建 / Build

```bash
npm run build      # 输出到 dist/
npm run preview    # 本地预览生产包
```

## 页面 / Routes

- `/` 首页
- `/what-we-do` 我们做什么（方法、公共价值、服务对象）
- `/capabilities` 能力总览
- `/capabilities/:slug` 能力详情（政府咨询 / 制度设计 / 数字公共基础设施 / 特殊辖区框架 / 数字居留模型 / 政策与监管框架）
- `/insights` 洞察（占位）
- `/contact` 联系

## 部署 / Deploy (Vercel)

- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
- SPA 路由重写已在 `vercel.json` 配置（深链接刷新不 404）。
- 若从 FCB 仓库部署：Vercel 项目的 **Root Directory** 设为 `cal-site`；或把本目录迁出为独立 repo 再导入。

## 内容 / Content

所有中英文案集中在 `content.ts`（`CONTENT.en` / `CONTENT.zh`）。改文案只动这一个文件。
品牌外链：FCB `futurecitizen.io`、MSD `msd.ms`；联系邮箱 `info@futurecitizen.io`（可在 `content.ts` 顶部常量修改）。

## 说明

- CAL 是**独立战略生态成员**（powered by FCB），与 FCB 主站、MSD 同属品牌矩阵。
- 目前目录嵌在 FCB 项目下以共享类型检查；正式上线前建议迁为独立 repo + 独立域名。
