# mr-progress-vue

## 简单demo查看

文件`dome/index.html`，只有两个最基础demo

## 详细演示查看

按步骤执行

`npm install` or `yarn install`

`npm run serve` or `yarn serve`

## 使用方式

可使用`npm install mr-progress-vue --save`进行安装

同时可引入`lib`文件夹下`progress.umd.min.js`进行使用

本项目依赖于`Vue2.x`，请自行安装

```javascript
// main.js Vue入口文件引入
import mrProgress from 'mr-progress-vue'
import 'mr-progress-vue/lib/mr-progress.css'
Vue.component(mrProgress.name, mrProgress)

// 组件内使用
<mrProgress :percentage="20" />
```

```javascript
// 组件内引入
import mrProgress from 'mr-progress-vue'
import 'mr-progress-vue/lib/mr-progress.css'
export default {
    components: {
        mrProgress,
    }
}
// 组件内使用
<mrProgress :percentage="20" />
```



## mr-progress文档

> 以下具体演示请运行项目查看

###  进度条定制

`type`属性等于`line`为线性进度条，等于`circle`为环形进度提

#### 线性进度条

```javascript
<mr-Progress :percentage="20" type="line"/>
```

![线性进度条](https://s1.ax1x.com/2020/04/05/GDyngA.png)

#### 环形进度条

```javascript
<mr-Progress :percentage="20" type="circle" />
```

![环形进度条](https://s1.ax1x.com/2020/04/05/GDyMut.png)

### 进度条内容定制

进度条内容支持插槽插入，插槽支持任意内容。

线性进度条可百分比内显，需将`textInside`属性设置为`true`

#### 插槽内容

```javascript
// 线性进度条
<mr-progress :percentage="percentage">
	<span class="percentage">{{ percentage }}%</span>
</mr-progress>
// 环形进度条
<mr-progress :percentage="percentage" type="circle">
	<span class="percentage">{{ percentage }}%</span>
</mr-progress>
```

![插槽内容](https://s1.ax1x.com/2020/04/05/GDylHf.png)

#### 线性进度条百分比内显

```javascript
<mr-Progress :percentage="percentage" textInside> </mr-Progress>
```

![百分比内显](https://s1.ax1x.com/2020/04/05/GDyG4g.png)

### 进度条颜色定制

设置`strokeColor`属性可更改进度条颜色，支持输入字符串与数组

当``strokeColor``为数组时，格式为： [

​    { color: 颜色, percentage: 进度 },

​    { color: 颜色, percentage: 进度 },

​    ....

 ]

详细查看演示项目

设置`strokeBgColor`属性可更改进度条背景颜色，只支持输入字符串

```javascript
<mr-progress :strokeColor="color" :percentage="percentage" />
<mr-progress :strokeColor="color" :percentage="percentage" type="circle" />
<mr-progress :strokeBgColor="color" :percentage="percentage" />
<mr-progress :strokeBgColor="color" :percentage="percentage" type="circle" />
<mr-progress :strokeColor="colorArr" :percentage="percentage" />
<mr-progress :strokeColor="colorArr" :percentage="percentage" type="circle" />
```

![颜色定制](https://s1.ax1x.com/2020/04/05/GDyUvn.png)

![颜色定制](https://s1.ax1x.com/2020/04/05/GDy0bV.gif)

### 进度条宽度定制

设置`width`属性可更改进度条宽度，单位`px`

```javascript
<mr-progress :width="200" :percentage="percentage" />
<mr-progress :width="200" :percentage="percentage" type="circle" />
```

![宽度定制](https://s1.ax1x.com/2020/04/05/GDyg29.png)

### 进度条进度线宽度定制

设置`strokeWidth`属性可更改进度线宽度，单位为`px`

```javascript
<mr-progress :strokeWidth="25" :percentage="percentage" />
<mr-progress :strokeWidth="25" :percentage="percentage" type="circle" />
```

![进度线宽度定制](https://s1.ax1x.com/2020/04/05/GDy5VK.png)

### 进度条样式定制

设置`strokeLinecap`属性可更改进度条样式，该值可选`round`或`butt`

`round`：椭圆形样式

`butt`：长方形样式

```javascript
<mr-progress :strokeWidth="25" :percentage="percentage" strokeLinecap="round" />
<mr-progress :strokeWidth="25" :percentage="percentage" strokeLinecap="butt" />
<mr-progress :strokeWidth="25" :percentage="percentage" type="circle" strokeLinecap="round" />
<mr-progress :strokeWidth="25" :percentage="percentage" type="circle" strokeLinecap="butt" />
```

![样式定制](https://s1.ax1x.com/2020/04/05/GDyH8H.png)

## mr-progress属性

| 参数          | 说明                 | 类型          | 可选值      | 默认值   |
| ------------- | -------------------- | ------------- | ----------- | :------- |
| type          | 进度条类型           | String        | circle/line | line     |
| width         | 容器宽度，单位px     | Number        | —           | 300      |
| strokeWidth   | 进度条宽度，单位px   | Number        | —           | 20       |
| strokeColor   | 进度条颜色           | String/ Array | —           | #6f7ad3  |
| strokeBgColor | 背景进度条颜色       | String        | —           | \#e5e9f2 |
| percentage    | 进度                 | Number        | 0~100       | 0        |
| strokeLinecap | 进度条样式           | String        | round/butt  | round    |
| textInside    | 线性进度条百分比内显 | Boolean       | —           | false    |