import Header from "./component/Header";
import ButtonNav from "./component/ButtonNav";

import { ThemeContext } from './context';

class Theme extends React.Component {

  state = {
    navData: [
      'black',
      'red',
      'orange',
      'purple'
    ],
    theme: 'black',
    activeIdx: 0
  }

  themeChange ({ theme, index }) {
    this.setState({
      theme,
      activeIdx: index
    })
  }

  render () {
    return (
      <ThemeContext.Provider value={{
        activeIdx: this.state.activeIdx,
        theme: this.state.theme,
        themeChange: this.themeChange.bind(this)
      }}>
        <Header>{ this.state.theme }</Header>
        <ButtonNav data={ this.state.navData } />
      </ThemeContext.Provider>
    )
  }
}

export default Theme;
