# 快速开始  {#快速开始}

## 使用LLOneBot {#使用LLOneBot}
使用LLOneBot插件监听QQ的所有消息

启用HTTP服务

启用HTTP时间上报

添加HTTP事件上报地址 `http:127.0.0.1:8888/receive`

## 启动Leet-Robot {#启动Leet-Robot}
获取`Leet-Robot`源码(联系Leet)
```js
// config.js
const self_qq = 'robot qq号码'
```
安装依赖
```sh
npm i
```
使用pkg打包出robot
```sh
npm run package
```
打包好的robot在根目录下的node-bot.exe
```
.
├─ /api
├─ /handle
├─ /nodule_modules
├─ /search
├─ .gitignore
├─ config.js
├─ index.js
├─ node-bot.exe
├─ package-lock.json
├─ package.json
├─ utils.js
├─ README.md
└─ package.json
```
window系统在命令行界面
```sh
node-robot.exe
```
