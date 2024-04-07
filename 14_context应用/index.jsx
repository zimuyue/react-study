import Theme from './Theme';

class App extends React.Component {
  render () {
    return <Theme />
  }
}

ReactDOM
.createRoot(document.getElementById('app'))
.render(<App />);
