# babel-function2arrow

一个 Babel 插件，用于将普通函数转换为箭头函数。

## 功能

- 将函数声明转换为箭头函数变量声明
- 将函数表达式转换为箭头函数
- 保持对象方法和类方法不变
- 跳过异步函数和生成器函数

## 安装

```bash
npm install babel-function2arrow --save-dev
```

## 使用

在你的 .babelrc 文件中添加插件：

```json
{
  "plugins": ["babel-function2arrow"]
}
```

## 示例

### 输入
```javascript
function add(a, b) {
    return a + b;
}

const multiply = function(a, b) {
    return a * b;
}
```

### 输出
```javascript
const add = (a, b) => {
    return a + b;
};

const multiply = (a, b) => {
    return a * b;
};
```

## 注意事项

1. 不会转换以下类型的函数：
   - 异步函数 (async)
   - 生成器函数 (generator)
   - 对象方法
   - 类方法

2. 需要注意 this 绑定的变化：
   - 箭头函数不绑定自己的 this
   - 箭头函数继承外层作用域的 this

## 开发

```bash
# 安装依赖
npm install

# 运行测试
npm test
```

## License

MIT
