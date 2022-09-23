# large-screen-for-vue

## 安装
```
npm install large-screen-for-vue -s
yarn add large-screen-for-vue
```

## 使用
main.js
```
import scaleContainer from 'large-screen-for-vue'
Vue.use(scaleContainer)
```
#### 需要使用的组件
*example1*
App.vue
```html
<scale-container>
// todo
</scale-container>
```

*example2*
```html
<scale-container :width="1920" :height="1080">
// todo
</scale-container>
```
## 注意事项
组件使用不要使用小驼峰写法
```html
<scaleContainer/> x

<scale-container /> √
```
<a href="https://www.npmjs.com/package/large-screen-for-vue" target="_blank" title="large-screen-for-vue"><img alt="npm" src="https://img.shields.io/npm/v/large-screen-for-vue?color=%2342d392&logo=large-screen-for-vue"></a>

[![NPM](https://nodei.co/npm/large-screen-for-vue.png)](https://nodei.co/npm/large-screen-for-vue/)
