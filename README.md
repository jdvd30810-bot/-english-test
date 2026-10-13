# 📚 英语易混淆词汇测试系统 (Confusing Words Quiz)

> 一款基于现代前端技术打造的**纯静态、高交互式英语易混淆词汇突击测试与记忆工具**。零后端依赖，支持浏览器本地持久化、智能间隔重复复习、离线发音、图片识别导入与 Anki 导出。

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![Vanilla JS](https://img.shields.io/badge/Vanilla-JS-yellow.svg)
![HTML5](https://img.shields.io/badge/HTML5-CSS3-orange.svg)

---

## ✨ 核心特性

- 🎯 **183+ 核心易混淆词库**：精心整理的高频考点及真题易混淆词，提供详尽的词源还原与干扰项对比解析。
- 🧠 **简易间隔重复算法 (Spaced Repetition)**：
  - 后台动态计算每个单词的熟练度（0 ~ 3 分）。
  - “智能复习”模式根据熟练度反向加权抽题，精准攻克薄弱盲区。
- 📖 **智能错题本 & 自动移出**：
  - 答错或点击“实在不会”自动纳入错题本，数据保存在浏览器 `localStorage` 中。
  - 具备记忆衰减检验：错题**连续做对 2 次**自动移出错题集，越学越薄。
- 🎲 **严格 Fisher-Yates 洗牌算法**：选项与题目顺序真正随机打乱，杜绝死记硬背选项位置。
- 🤖 **混合干扰项生成引擎**：导入新词只需输入 `单词 释义`，系统自动从词库抽取真实词义作为混淆项，无需手动编题。
- 📷 **OCR 图片智能识别导入**：
  - 内置基于 Tesseract.js 的浏览器端 OCR 引擎。
  - 支持直接截图、拖拽或拍照上传词汇表，自动提取英文单词与中文释义。
- 🔊 **纯前端语音发音**：基于 Web Speech API 原生朗读，支持自定义语速，无需网络音频服务。
- 📥 **Anki / Markdown 格式导出**：一键导出所有错题为制表符（Tab）分隔格式，方便无缝导入 Anki、Quizlet 或 Notion。
- ⌨️ **全键盘无障碍操作**：
  - `1` ~ `4`：快速选择对应选项
  - `Space` / `Enter`：实在不会（看答案并记入错题）
  - `S`：播放单词发音
  - `←` / `Backspace`：返回上一题
  - `Enter`：下一题 / 提交

---

## 🚀 快速上手

本项目为纯前端静态应用，**无需安装 Node.js、Python 或任何数据库**。

### 方式一：直接运行
1. 下载或克隆仓库：
   ```bash
   git clone https://github.com/jdvd30810-bot/english-confusing-words-quiz.git
   cd english-confusing-words-quiz
   ```
2. 直接在文件管理器中双击打开 `index.html` 即可畅玩！

### 方式二：部署到 GitHub Pages (推荐)
1. 将本项目推送到你的 GitHub 仓库。
2. 进入仓库设置 **Settings -> Pages**。
3. 在 **Branch** 下选择 `main` 分支的 `/ (root)` 路径，点击 **Save**。
4. 稍等一分钟，即可通过 GitHub 提供的免费公开网址在线访问！

---

## 📂 项目结构

```text
├── index.html        # 前端交互界面与业务逻辑（单文件整合）
├── words.js          # 核心词库数据（数据与视图分离，方便扩充与维护）
├── .env.example      # 环境变量配置模板
├── .gitignore        # Git 忽略配置文件（防止系统垃圾与敏感文件提交）
├── LICENSE           # 开源协议 (MIT)
└── README.md         # 项目文档
```

---

## ⚙️ 环境变量与进阶配置

本项目采用开箱即用设计，默认无需任何配置。若需要结合静态服务器（如 Docker、Vercel、Nginx）或自定义配置，可参考 `.env.example`：

```bash
cp .env.example .env
```

代码支持通过 `window.__APP_ENV__` 进行运行时动态覆盖（详见 `index.html`）。

---

## 📄 开源协议

本项目采用 [MIT License](LICENSE) 许可协议，欢迎自由学习、商用及二开贡献！
