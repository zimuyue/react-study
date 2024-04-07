/*
  key 是 React 查看元素是否改变的一个唯一标识
  列表中的每个子元素都必需一个唯一的 key 属性值
  建立在列表顺序改变、元素增删的情况下，不建议使用 index 做为 key 值
  
  在对列表项进行增删或顺序操作时，对应的 index 项会发生变化
  key 对应的项还是之前列表情况的对应元素的值
  导致状态（arr）混乱，查找元素性能就会变差

  好的做法是：
  如果列表是静态不可操作的，可以选择 index 作为 key 但是也不推荐
  很有可能这个列表在以后维护扩展的时候，有可能变更为可操作的列表

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
