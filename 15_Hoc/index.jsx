import StudentList from './components/StudentList';
import TeacherList from './components/TeacherList';

import { fetchListData } from './model';

const StudentListHoc = StudentList(fetchListData);
const TeacherListHoc = TeacherList(fetchListData);

import MyInput from './components/MyInput';
import InputHoc from './components/InputHoc';

const MyInputHoc = InputHoc(MyInput);

class App extends React.Component {

  state = {
    a: 1,
    b: 2,
    c: 3
  }

  render () {
    return (
      <div className="app">
        <StudentListHoc field="student" />
        <TeacherListHoc field="teacher" />
        <MyInputHoc { ...this.state } />
      </div>
    )
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
