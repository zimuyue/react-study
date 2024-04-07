/*
  React 是构建 JS 页面的库，只关注于 View 层的渲染
  仅仅只是一个视图渲染的工具，并非是框架，不关注于 Modal 层的问题

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

    /*
      JSX
      1. 一种标签语法，对 JS 进行的语法扩展
      2. 不是字符串也不是 HTML 标签
      3. 描述 UI 呈现与交互的直观的表现形式
      4. 用来生成 React 元素
    */
    return (
      /*
        React 认为 UI 视图与逻辑是具备耦合性的
        所以设计使用 JSX 语法来编写各种组件页面

        JSX 遵循 JS 的命名规范使用 camelCase 小驼峰形式
        class => className   tabindex => tabIndex
      */
      <>
        <p>
          { 
            /* 插值表达式 */
            this.state.openStatus ? 'open status' : 'close status'
          }
        </p>
        {
          /* 
            onClick 绑定的事件函数触发时，指向的是事件源
            所以要通过 bind 方法指定为当前实例对象
            或者直接在定义方式时，使用箭头函数来指定 this
          */
        }
        <button onClick={ this.stateChange.bind(this) }>
          { this.state.openStatus ? 'Close' : 'Open' }
        </button>
      </>
      /*
        React.Fragment 组件
        本质上就是通过 document.createDocumentFragment() 创建文档碎片
        短语法使用 <></> 方式，不支持 key 值
        Fragment 除了 key 属性，不支持其他任何属性
      */
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
