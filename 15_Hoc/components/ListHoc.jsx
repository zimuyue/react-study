/*
  高阶组件 HOC 高级的设计模式 Higher Order Component
  当两个组件具备相同的行为，为了避免这种代码的冗余
  可以使用包裹组件，将两个组件相似性的行为合并
  通过 props 将行为进行传递给这两个组件

  横切关注点
  对参数组件本身的逻辑状态与视图的横向切割
  让 HOC 来完成逻辑和状态的管理，让参数组件来完成视图的渲染
  让 HOC 将数据与逻辑传递到参数组件中，从而完成关注点分离且有机结合的任务
  
  1.HOC 是一个函数，接收一个组件参数，返回一个新组件
  2.HOC 不能修改参数组件，只能传入组件所需要的 props
  3.HOC 是一个没有副作用的纯函数
  4.HOC 除了必须填入被包裹的组件参数以外，其余参数根据需求增加
  5.HOC 不关心数据如何使用，包裹组件不关心数据从哪里来
  6.HOC 和包裹组件直接唯一的契合点就是 props
*/

function ListHoc (WrapperComponent) {
  return function (fetchListData) {
    return class extends React.Component {
      state = {
        listData: []
      }

      async componentDidMount () {
        const listData = await fetchListData(this.props.field);
        
        this.setState({
          listData: listData.data
        })
      }

      removeStudent (id) {
        this.setState({
          listData: this.state.listData.filter(item => item.id !== id)
        })
      }
    
      likeTeacher (id) {
        this.setState({
          listData: this.state.listData.map(item => {
            if (item.id === id) item.like += 1;
            return item;
          })
        })
      }

      render () {
        const { field } = this.props;
        const { listData } = this.state;

        return (
          field === 'student' ?
          <WrapperComponent 
            data={ listData } 
            removeStudent={ this.removeStudent.bind(this) }
          />
          :
          <WrapperComponent 
            data={ listData } 
            likeTeacher={ this.likeTeacher.bind(this) }
          />
        )
      }
    }
  }
}

export default ListHoc;
