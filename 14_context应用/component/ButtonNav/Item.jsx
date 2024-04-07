import { ThemeContext } from '../../context';

class NavItem extends React.Component {
  render () {
    const { item, index } = this.props;
    return (
      <ThemeContext.Consumer>
        {
          ({ activeIdx, theme, themeChange }) =>
          <div
            className={ index === activeIdx ? `item active-${theme}` : 'item' }
            onClick={ () => themeChange({ theme: item, index }) }
          >{ item }</div>
        }
      </ThemeContext.Consumer>
    )
  }
}

export default NavItem;
