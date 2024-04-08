/*
  React 使用 JSX map 方法来渲染列表
  列表中每一个子元素都必需有唯一的 key 属性值
  key 值是 React 查看元素是否改变的一个唯一标识

  如果使用 index 作为 key 值，当对列表项进行增删或顺序操作时
  对应的 index 项会发生变化，导致列表状态混乱，查找元素性能就会变差
  所以仅再操作列表时，不建议使用 index 做为 key 值
  如果是静态渲染列表，后续不会产生操作时，可以使用 index 方式

  1. 尽量避免使用 index
  2. 可以用数据中的 ID(但有可能 ID 会变动)
  3. 使用动态生成一个静态 ID  nanoid库
*/

import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    arr: [
      {
        id: 1,
        name: 'ming'
      },
      {
        id: 2,
        name: 'hong'
      },
      {
        id: 3,
        name: 'king'
      }
    ]
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.state.arr.map((item, index) => {
              const key = nanoid();
              return (
                // <li key={ index } >{ item.name }</li>
                // <li key={ item.id } >{ item.name }</li>
                <ListItem key={ key } sid={ key } {...item} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

class ListItem extends React.Component {
  constructor (props) {
    super(props);
  }
  // key 是不会作为属性传递给子组件的，必须显示传递 key 值
  // 防止开发者在逻辑中对 key 值进行操作
  render () {
    console.log(this.props.key);
    const { name, sid } = this.props;
    return <li>{ sid + ' ' + name }</li>
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
