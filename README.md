# React基礎底層

## 展示頁
```
https://marcochiu.github.io/20251226_1/
```

## 所有指令在專案底下使用VS Code 上方的Terminal(終端機)

### 安裝Node.js 16版以上
```
node -v
```

### Github網頁上操作
```
1.建立repository 
2.輸入專案名稱跟簡介
3.Choose visibility 選public才可以部屬到Github Page
4.Add README 要開啟
5.建立完成後點選<> Code
6.複製HTTPS底下文字
```

### 開啟VS Code
```
1.左邊選單source control 
2.Clone Resposity
3.選擇專案路徑
```

### 建立vite專案
```
npm create vite@latest
```

```
Need to install the following packages:(安裝套件，第一次會問安裝過就不會出現)
create-vite@8.1.0
Ok to proceed? (y) y

◆  Project name:(專案名稱)
│  .
└
◆  Current directory is not empty. Please choose how to proceed:(刪除的話只有READMME.md所以不影響)
│  ○ Cancel operation
│  ● Remove existing files and continue
│  ○ Ignore files and continue
└
◆  Select a framework:(開發框架)
│  ○ Vanilla
│  ○ Vue
│  ● React
│  ○ Preact
│  ○ Lit
│  ○ Svelte
│  ○ Solid
│  ○ Qwik
│  ○ Angular
│  ○ Marko
│  ○ Others
└
◆  Select a variant:(開發語言方式)
│  ○ TypeScript
│  ○ TypeScript + React Compiler
│  ○ TypeScript + SWC
│  ● JavaScript
│  ○ JavaScript + React Compiler
│  ○ JavaScript + SWC
│  ○ React Router v7 ↗
│  ○ TanStack Router ↗
│  ○ RedwoodSDK ↗
│  ○ RSC ↗
└

◆  Use rolldown-vite (Experimental)?:(實驗性工具，建議不使用)
│  ○ Yes
│  ● No
└

◆  Install with npm and start now?(安裝npm，選No自行npm install)
│  ● Yes / ○ No
└
  ➜  Local:   http://localhost:5173/ (npm run dev)
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 專案結構說明 
```
react/
├── node_modules/          # 開發套件
├── public/                # 靜態資源目錄，不編譯
├── src/                   # 原始碼目錄，編譯
│   └── assets/            # 附加資源（例如圖片、字型）
│   ├── App.css            # 主樣式
│   ├── App.jsx            # 主元件
│   ├── index.css          # 全域樣式檔案
│   ├── main.jsx           # 進入點，所有檔案軍需要跟他產生關連才會被編譯
├── .gitignore             # 排除檔案，不會上傳至github
├── eslint.config.js       # 程式碼檢測設定檔
├── index.html             # 首頁
├── package-lock.json      # 專案套件清單，自動產生勿隨意修改
├── package.json           # 專案套件清單 
├── README.md              # 專案說明文件
├── vite.config.js         # Vite 設定檔
```

### 運行開發專案
```
npm run dev
```

### 拿到他人專案時先安裝npm
```
npm install  
```

### 建立編譯專案(Live Server觀看dist內容)
```
npm run build
```

### Publish Github Page
```
package.json
"scripts": {
    ...
    "deploy": "vite build && gh-pages -d dist"
 }
```
```
npm install gh-pages --save-dev

```
```
npm run deploy
```

### Github Page Error
```
vite.config.js
base:process.env.NODE_ENV ==='production'?'/您的專案名稱/' :'/',
```
 
### axios
```
npm install axios
page import axios from 'axios'
```

### scss
```
npm add -D sass
main.jsx import './assets/all.scss' 
```

### bootstrap
```
npm i bootstrap
``` 

### 嚴格模式
```
  <StrictMode>
    <App />
  </StrictMode>
```


# SCSS → CSS → HTML 速查表（帶用途說明）

| SCSS | CSS | HTML | 說明 |
|------|-----|------|------|
| `.content { &.bg1 { color: red; } }` | `.content.bg1 { color: red; }` | `<div class="content bg1">Hello</div>` | `&` 代表父選擇器，生成 `.content.bg1`。 |
| `.content { &:hover { color: blue; } }` | `.content:hover { color: blue; }` | `<div class="content">Hover me</div>` | 父選擇器加偽類，用於 hover 效果。 |
| `.content { &::after { content: ''; display: block; } }` | `.content::after { content: ''; display: block; }` | `<div class="content"></div>` | 父選擇器加偽元素，常用於裝飾或清除浮動。 |
| `.menu { li { a { color: green; } } }` | `.menu li a { color: green; }` | `<ul class="menu"><li><a href="#">Link</a></li></ul>` | 巢狀子選擇器，清楚表示結構。 |
| `.box { &-large { width: 200px; } }` | `.box-large { width: 200px; }` | `<div class="box-large">Big Box</div>` | BEM 常用寫法，`&-xxx` 生成 modifier 類名。 |
| `.btn { &.active:hover { background: yellow; } }` | `.btn.active:hover { background: yellow; }` | `<button class="btn active">Click</button>` | 多層組合偽類，用於 active 狀態樣式。 |
| `.list { > li { margin: 10px; } }` | `.list > li { margin: 10px; }` | `<ul class="list"><li>Item 1</li><li>Item 2</li></ul>` | 直接子元素選擇器，只選擇 `.list` 的直系子 `li`。 |
| `.card { & + & { margin-top: 20px; } }` | `.card + .card { margin-top: 20px; }` | `<div class="card">Card 1</div><div class="card">Card 2</div>` | 相鄰元素選擇器，給連續 `.card` 間距。 |
| `.nav { &-item { padding: 5px; } }` | `.nav-item { padding: 5px; }` | `<div class="nav-item">Nav</div>` | BEM 命名，生成子元素類名。 |
| `.wrapper { & > .inner { padding: 10px; } }` | `.wrapper > .inner { padding: 10px; }` | `<div class="wrapper"><div class="inner">Inner</div></div>` | 直接子元素選擇器。 |
| `.text { &.bold, &.strong { font-weight: 700; } }` | `.text.bold, .text.strong { font-weight: 700; }` | `<p class="text bold">Bold</p><p class="text strong">Strong</p>` | 多重 class 選擇器。 |
| `.alert { &-success { color: green; } &-error { color: red; } }` | `.alert-success { color: green; } .alert-error { color: red; }` | `<div class="alert-success">Success</div><div class="alert-error">Error</div>` | BEM Modifier，用於訊息分類。 |
| `.btn { &-primary { background: blue; } &-secondary { background: gray; } }` | `.btn-primary { background: blue; } .btn-secondary { background: gray; }` | `<button class="btn-primary">Primary</button><button class="btn-secondary">Secondary</button>` | 按鈕不同風格樣式。 |
| `.form { input { &:focus { border-color: blue; } } }` | `.form input:focus { border-color: blue; }` | `<form class="form"><input type="text" /></form>` | 子元素偽類選擇器，用於 focus 效果。 |
| `.menu { li { &.active { font-weight: bold; } } }` | `.menu li.active { font-weight: bold; }` | `<ul class="menu"><li class="active">Item 1</li></ul>` | 子元素 class 狀態樣式。 |
| `.card { &:first-child { margin-top: 0; } &:last-child { margin-bottom: 0; } }` | `.card:first-child { margin-top: 0; } .card:last-child { margin-bottom: 0; }` | `<div class="card">1</div><div class="card">2</div>` | 偽類 first/last，用於邊界控制。 |
| `.list { li { &:nth-child(odd) { background: #eee; } } }` | `.list li:nth-child(odd) { background: #eee; }` | `<ul class="list"><li>1</li><li>2</li></ul>` | 偽類 nth-child，交替背景色。 |
| `.btn { &.disabled, &[disabled] { opacity: 0.5; pointer-events: none; } }` | `.btn.disabled, .btn[disabled] { opacity: 0.5; pointer-events: none; }` | `<button class="btn disabled">Disabled</button><button class="btn" disabled>Disabled</button>` | 多重選擇器，處理 class 或屬性狀態。 |
| `.wrapper { &-inner { padding: 10px; } }` | `.wrapper-inner { padding: 10px; }` | `<div class="wrapper-inner">Inner</div>` | BEM 子元素命名。 |
| `.card { & > .header { font-size: 18px; } }` | `.card > .header { font-size: 18px; }` | `<div class="card"><div class="header">Header</div></div>` | 父 > 直系子元素選擇器。 |
| `.btn { &-icon { margin-right: 5px; } }` | `.btn-icon { margin-right: 5px; }` | `<button class="btn-icon">Icon</button>` | BEM 子元素樣式。 |
| `.menu { li { & + li { border-top: 1px solid #ccc; } } }` | `.menu li + li { border-top: 1px solid #ccc; }` | `<ul class="menu"><li>1</li><li>2</li></ul>` | 相鄰元素選擇器，常用於列表間隔。 |
| `.tabs { &-active { font-weight: bold; } }` | `.tabs-active { font-weight: bold; }` | `<div class="tabs-active">Tab 1</div>` | BEM Modifier，用於 tab 狀態。 |
| `.list { li { &:first-of-type { color: red; } } }` | `.list li:first-of-type { color: red; }` | `<ul class="list"><li>First</li><li>Second</li></ul>` | first-of-type 偽類選擇器。 |
| `.card { &::before { content: "★"; } }` | `.card::before { content: "★"; }` | `<div class="card">Card</div>` | 偽元素 ::before，用於裝飾符號。 |
| `.nav { li { a { &:hover { color: orange; } } } }` | `.nav li a:hover { color: orange; }` | `<ul class="nav"><li><a href="#">Link</a></li></ul>` | 巢狀偽類選擇器，hover 效果。 |
| `.form { &-input { padding: 5px; } &-label { font-size: 14px; } }` | `.form-input { padding: 5px; } .form-label { font-size: 14px; }` | `<input class="form-input"><label class="form-label">Label</label>` | BEM 命名子元素樣式。 |
| `.btn { &.primary:active { background: darkblue; } }` | `.btn.primary:active { background: darkblue; }` | `<button class="btn primary">Click</button>` | 多重狀態偽類。 |
| `.alert { &-info { background: #eef; } }` | `.alert-info { background: #eef; }` | `<div class="alert-info">Info</div>` | BEM Modifier 類名。 |
| `.card { &.highlighted { border-color: gold; } }` | `.card.highlighted { border-color: gold; }` | `<div class="card highlighted">Card</div>` | 狀態樣式 class。 |
| `.list { li { &.completed { text-decoration: line-through; } } }` | `.list li.completed { text-decoration: line-through; }` | `<ul class="list"><li class="completed">Done</li></ul>` | 任務列表完成狀態。 |
| `.wrapper { &-content { padding: 20px; } }` | `.wrapper-content { padding: 20px; }` | `<div class="wrapper-content">Content</div>` | BEM 子元素樣式。 |
| `.tabs { li { &.active { border-bottom: 2px solid blue; } } }` | `.tabs li.active { border-bottom: 2px solid blue; }` | `<ul class="tabs"><li class="active">Tab1</li></ul>` | Tab active 狀態。 |
| `.btn { &-small { font-size: 12px; padding: 2px 5px; } }` | `.btn-small { font-size: 12px; padding: 2px 5px; }` | `<button class="btn-small">Small</button>` | 小按鈕樣式。 |
| `.card { &-footer { text-align: right; } }` | `.card-footer { text-align: right; }` | `<div class="card-footer">Footer</div>` | 卡片 footer 排版。 |
| `.menu { li { &:last-of-type { margin-bottom: 0; } } }` | `.menu li:last-of-type { margin-bottom: 0; }` | `<ul class="menu"><li>1</li><li>2</li></ul>` | 列表最後一項去掉間距。 |
| `.icon { &.large { width: 50px; height: 50px; } }` | `.icon.large { width: 50px; height: 50px; }` | `<div class="icon large"></div>` | 大尺寸圖示。 |
| `.nav { &-link { text-decoration: none; } }` | `.nav-link { text-decoration: none; }` | `<a class="nav-link" href="#">Link</a>` | BEM 子元素。 |
| `.card { &.shadow { box-shadow: 0 2px 5px rgba(0,0,0,0.3); } }` | `.card.shadow { box-shadow: 0 2px 5px rgba(0,0,0,0.3); }` | `<div class="card shadow">Card</div>` | 卡片陰影效果。 |
| `.btn { &.rounded { border-radius: 5px; } }` | `.btn.rounded { border-radius: 5px; }` | `<button class="btn rounded">Click</button>` | 圓角按鈕。 |
| `.list { li { &.active { background: #ddd; } } }` | `.list li.active { background: #ddd; }` | `<ul class="list"><li class="active">Active</li></ul>` | 列表項目 active 狀態。 |
| `.card { &-header { font-weight: bold; } &-body { padding: 10px; } }` | `.card-header { font-weight: bold; } .card-body { padding: 10px; }` | `<div class="card-header">Header</div><div class="card-body">Body</div>` | 卡片結構樣式。 |
| `.btn { &-icon-left { margin-right: 5px; } &-icon-right { margin-left: 5px; } }` | `.btn-icon-left { margin-right: 5px; } .btn-icon-right { margin-left: 5px; }` | `<button class="btn-icon-left">Left</button><button class="btn-icon-right">Right</button>` | BEM 按鈕圖示位置。 |
| `.menu { li { &:hover { background: #f5f5f5; } } }` | `.menu li:hover { background: #f5f5f5; }` | `<ul class="menu"><li>Item</li></ul>` | hover 效果。 |
| `.alert { &.warning { background: #fffae5; border-color: #ffecb3; } }` | `.alert.warning { background: #fffae5; border-color: #ffecb3; }` | `<div class="alert warning">Warning</div>` | 警告訊息樣式。 |
