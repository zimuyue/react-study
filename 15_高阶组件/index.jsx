import StudentList from './components/StudentList';
import TeacherList from './components/TeacherList';

import { fetchListData } from './model';

class App extends React.Component {
  state = {
    studentList: [],
    teacherList: []
  }

  async componentDidMount () {
    const studentData = await fetchListData('student');
    const teacherData = await fetchListData('teacher');
    
    this.setState({
      studentList: studentData.data,
      teacherList: teacherData.data
    })
  }

  removeStudent (id) {
    this.setState({
      studentList: this.state.studentList.filter(item => item.id !== id)
    })
  }

  likeTeacher (id) {
    this.setState({
      teacherList: this.state.teacherList.map(item => {
        if (item.id === id) {
          item.like += 1;
        }
        return item;
      })
    })
  }

  render () {
    return (
      <div className="app">
        <StudentList
          data={ this.state.studentList }
          removeStudent={ this.removeStudent.bind(this) }
        />
        <TeacherList
          data={ this.state.teacherList }
          likeTeacher={ this.likeTeacher.bind(this) }
        />
      </div>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
