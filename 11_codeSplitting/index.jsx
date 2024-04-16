/*
  代码分割
  项目打包是整体打包成一个 bundle.js 文件
  有些边缘性的代码、模块加载的时候是不需要
  将这些内容分割出来单独形成一个文件块 chunk

  好处是：模块懒加载、减少应用体积、减少加载时的体积

  模块 ES module ES6 import export
  import 用来导入模块，是 ES6 模块化的一个关键字，注意它不是函数
  类似于 typeof - typeof()

  静态导入(static import) import xxx from 'xxx' 导入的模块会被编译后加载
  动态导入(dynamic import) import('') 根据条件或按需的模块导入

  dynamic import 应用场景
  1. 模块内容体积较大，不需要马上加载的
  2. 模块的导入占用的大量的系统内存
  3. 模块需要异步获取
  4. 导入模块时需要动态的构建路径（说明符）
    import('./' + a + b + c + '.js') 动态说明符，静态导入不支持这种写法
  5. 模块中的代码需要程序触发了某些条件才运行的
*/

var btn = document.createElement('button');
var app = document.getElementById('app');

btn.textContent = 'Click';
app.appendChild(btn);

btn.addEventListener('click', async function () {
  var Test = await import('./index.1.module.js').then(res => res.default);
  var { plus } = await import('./index.2.module.js');
  console.log(plus(1, 2));
  new Test();
})
