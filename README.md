# React + Vite

### 安裝Node.js 16版以上 
```
node -v
```

### Github網頁上操作
```
建立repository 
輸入專案名稱跟簡介
Add README 要開啟
建立完成後點選<> Code
複製HTTPS底下文字
```

### 開啟VS Code
```
左邊選單source control 
Clone Resposity
選擇路徑
```

### 建立vite專案，開啟Termainal
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

### 發佈到Github Page
```
package.json 底下加入
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

 



