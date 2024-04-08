/*
  React.createContext(defaultValue)
  React 提供的一种方法，用于给整个组件树创建共享全局的数据
  通过创建上下文对象，提供两个组件 Provider 与 Consumer

  <ThemeContext.Provider> 提供方 -> 必须使用 value props 来提供数据
  <ThemeContext.Consumer> 消费方 -> 使用回调函数的方式接收数据

  每当 Provider 传递的 value 数据发生变化时，插入 Provider 的组件都会重新渲染
  Consumer 组件会找离自己最近的 Provider 获取 value 值
  如果没有匹配到 Provider 就使用 default value 其他情况均不使用默认参数
  默认值可以避免上下文对象中因缺少提供方 value 从而可能产生的错误

  适用场景：杂乱无章的组件都需要同一些数据
  如果只是单纯为了不层层传递属性的话 Context 实际上是不合适的
  弱点：弱化及污染组件的纯度，导致组件复用性降低
*/
const ThemeContext = React.createContext({
  activeIdx: 0,
  theme: 'black',
  themeChange: () => {}
})

ThemeContext.displayName = 'AppThemeContext'; // 为 devTools 提供具体的名称方便调试

/*
  contextType
  class 中静态属性 static contextType = React.createContext('xx')
  contextType -> React.createContext() -> Context 对象
  给当前环境下的 context 重新指定引用
  Class new this -> context -> Context 对象
  指定后可以通过 this.context 来获取上下文对象
  好处：在生命周期函数和 render 函数中都可以访问
*/

export {
  ThemeContext
}
