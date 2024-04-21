import ListItem from './ListItem';

function List ({ todoList, addCount, removeCount }) {
  return (
    <div>
      <p>
        <span>已添加过{ addCount }条</span>&nbsp;/&nbsp;
        <span>已删除过{ removeCount }条</span>
      </p>
      <ul>
        {
          todoList.map(todo => {
            return <ListItem todo={ todo } key={ todo.id } />
          })
        }
      </ul>
    </div>
  )
}

export default List;