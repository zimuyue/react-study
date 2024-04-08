/*
  React 是构建 JS 页面的库，只关注于 View 层的渲染
  仅仅只是一个视图渲染的工具，并非是框架，不关注于 Modal 层的问题

  React 提供了 JSX 标签语法，是对 JS 进行的语法扩展
  不是字符串也不是 HTML 标签，用来直接生成 React 元素
  React 认为 UI 视图与逻辑是具备耦合性的，所以设计使用 JSX 语法来编写各种组件页面

  npx npm5.2+ 包运行工具
  create-react-app 内部工程化 babel/webpack
*/

console.log('React:', React);

class Home extends React.Component {
  constructor (props) {
    super(props);

    // this.state = {
    //   openStatus: false
    // }
  }

  // ES2017
  state = {
    openStatus: false
  }

  stateChange () {
    this.setState({
      openStatus: !this.state.openStatus
    })
  }

  render () {
    // return React.createElement(
    //   'div', 
    //   { 'data-tag': 'div' },
    //   'This is my first React experience'
    // )

    return (
      /*
        React.Fragment 组件
        本质上就是通过 document.createDocumentFragment() 创建文档碎片
        短语法使用 <></> 方式，这种写法不支持 key 值
        Fragment 除了 key 属性，不支持其他任何属性
      */
      <>
        <p>
          { this.state.openStatus ? 'open status' : 'close status' }
        </p>
        <button onClick={ this.stateChange.bind(this) }>
          { this.state.openStatus ? 'Close' : 'Open' }
        </button>
      </>
    )
  }
}

/*
  JSX 被编译之后会转为 React 元素，其实就是普通对象
  使用 JSX 语法创建的元素与 React.createElement 是同一种对象
  而对象内部属性使用 $$typeof: Symbol(react.element) 标记该对象是 React 元素对象
  React 元素是不可变的对象 immutable object 不能添加、修改、删除属性以及属性描述配置

  在 render 视图渲染之前，所有的 JSX 都会转为字符串
  并且将所有输入的内容都会进行转义，所以在 JSX 语法中想要进行 XSS 攻击是不容易的
*/
const rEl = <h1 className="title">This is my Title</h1>;
const rEl2 = React.createElement('h1', { className: 'title' }, 'This is my Title');
console.log(rEl, rEl2);


/*
  React 提供了 React API 用来处理视图的 API 集合
  ReactDOM 提供了 render 方法，用来将虚拟 DOM 转换为真实 DOM
*/
const container = document.getElementById('app');

/*
  HTML 中的 div 容器作为根节点
  根节点内所有内容都是由 ReactDOM 进行管理
  使用 render 方法将 React 元素渲染到根节点上
*/
const root = ReactDOM.createRoot(container);

/*
  React 需要先创建 React 元素转为虚拟节点，再去转换为真实节点
  所以需要使用 React.createElement 去创建 React 元素
  或者直接使用 JSX 语法来创建 React 元素
*/
// root.render(React.createElement(Home));
root.render(<Home />);


/**
 * React@17 版本
 * @param ReactElement - React元素
 * @param rootNode - 根节点
 */
// ReactDOM.render(ReactElement, rootNode);
