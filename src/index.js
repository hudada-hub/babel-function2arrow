const { declare } = require('@babel/helper-plugin-utils');
const { types: t } = require('@babel/core');

module.exports = declare((api, options) => {
  api.assertVersion(7);

  return {
    name: 'transform-function-to-arrow',
    visitor: {
      FunctionDeclaration(path) {
        const { node } = path;
        
        // 跳过异步函数和生成器函数
        if (node.async || node.generator) {
          return;
        }

        // 创建箭头函数
        const arrowFunction = t.arrowFunctionExpression(
          node.params,
          node.body,
          false
        );

        // 创建变量声明
        const variableDeclaration = t.variableDeclaration('const', [
          t.variableDeclarator(node.id, arrowFunction)
        ]);

        // 替换原函数声明
        path.replaceWith(variableDeclaration);
      },

      FunctionExpression(path) {
        const { node, parent } = path;

        // 跳过异步函数和生成器函数
        if (node.async || node.generator) {
          return;
        }

        // 跳过对象方法和类方法
        if (t.isObjectMethod(parent) || t.isClassMethod(parent)) {
          return;
        }

        // 创建箭头函数
        const arrowFunction = t.arrowFunctionExpression(
          node.params,
          node.body,
          false
        );

        path.replaceWith(arrowFunction);
      }
    }
  };
});
