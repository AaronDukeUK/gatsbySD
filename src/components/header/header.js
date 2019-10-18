import React from 'react';
import { Link } from 'gatsby';
import HamburgerMenu from 'react-hamburger-menu';
import CheeseburgerMenu from 'cheeseburger-menu';

import './header.css';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    };
  }

  openMenu() {
    this.setState({ menuOpen: true });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <nav>
        <ul className="menu">

          <HamburgerMenu
            isOpen={this.state.menuOpen}
            menuClicked={this.openMenu.bind(this)}
            width={32}
            height={24}
            strokeWidth={3}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
          <CheeseburgerMenu
            isOpen={this.state.menuOpen}
            closeCallback={this.closeMenu.bind(this)}
          >

            <Link to="/" className="menuItem" activeClassName="active">HOME</Link>

            <Link to="/menus" className="menuItem" activeClassName="active">MENUS</Link>
            <Link to="/recipies" className="menuItem" activeClassName="active">RECIPIES</Link>
            <Link to="/about" className="menuItem" activeClassName="active">ABOUT US</Link>
            <Link to="/contact" className="menuItem" activeClassName="active">CONTACT</Link>
          </CheeseburgerMenu>

        </ul>
      </nav>

    );
  }
}

export default Header;
