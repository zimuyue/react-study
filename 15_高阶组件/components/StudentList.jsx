import ListHoc from './ListHoc';

class StudentList extends React.Component {
  render () {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>年级</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.data.map(item => (
              <tr key={ item.id }>
                <td>{ item.id }</td>
                <td>{ item.name }</td>
                <td>{ item.grade }</td>
                <td>
                  <button
                    onClick={ () => this.props.removeStudent(item.id) }
                  >删除</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}

export default ListHoc(StudentList);