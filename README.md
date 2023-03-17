# Hero card

Clifford 的作業

## Run Locally

Clone the project

```bash
  git clone https://github.com/Clifford0205/hero-card.git
```

Go to the project directory

```bash
  cd hero-card
```

Install dependencies

```bash
  npm install
```

OR

```bash
   yarn
```

Start the server

```bash
  npm run start or yarn start
```

OR

```bash
  yarn start
```

## 專案的架構

- routes 裡面擺所有的頁面,只有一個 Heros 和其子路徑 Heros Profile

- 非路徑相關 component 擺到 components 資料夾

- api 統一在 api 資料夾管理,以檔案名稱區分 api 的功能

- hooks 統一在 hooks 資料夾管理,以檔案名稱區分 hooks 的功能

- context 統一在 context 資料夾管理,以檔案名稱區分 context 的功能

- Redux 的全域變數放在 store 當中,以資料夾名稱區分

## 使用第三方的 library

- material-ui:好用的 ui library,支援 styled component,可導入 theme 的顏色或是各種參數設定

- axios:方便打 api 以及好管理的工具

- react-app-rewired:設定專案的 path alias 讓開發時不用一直點點點去掉用元件

- lodash-es:好用的函式庫,處理各種判斷邏輯,與一般 lodash 相比是打包更輕量化

- redux-toolkit:redux 官方推薦的 library,可把 reducer,action,type 統一整理成一段 加速快發

- redux-logger:設定在 redux middleWare 中,當改變 redux 的時候 會把 redux 的值 console 出來,大型專案不建議使用

- reselect:redux 的 memory 好幫手,當 redux 更新不相關的 state,其他的 state 可以記住原本物件的指向

- react-toastify:跳提示的小工具

## 程式碼註解原則

通常變數的命名或邏輯太過複雜或是過度冗長的部分我才會下註解，這樣要求自己變數命名或寫邏輯時一定要仔細想過。
此專案只有在 material-ui 的 theme.js 小小註解一下顏色的參數的設定。

## 遇到的困難

在設定能力值的時候，連動的點數讓我有點苦惱，一開始想拆成兩個 state，一個控制能力，一個控制剩餘點數，但在改變值的時候，我並不想用 useEffect 或是一個 function 裡面連續寫兩個 set 這種方式，最後我決定在 context 裡面用 reducer 使用 payload 直接替換掉一整組運算出來的成果去達到。
