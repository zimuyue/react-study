import './index.scss';

import NavItem from './Item';

class ButtonNav extends React.Component {
  render () {
    return (
      <div className="nav">
        {
          this.props.data.map((item, index) => {
            return (
              <NavItem
                item={ item }
                index={ index }
                key={ index }
              />
            )
          })
        }
      </div>
    )
  }
}

export default ButtonNav;
