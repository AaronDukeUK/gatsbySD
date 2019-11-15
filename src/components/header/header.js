import React from "react";
import { Link } from "gatsby";
import HamburgerMenu from "react-hamburger-menu";
import CheeseburgerMenu from "cheeseburger-menu";

import "./header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <ul className="menu">
        <HamburgerMenu
          isOpen={this.state.menuOpen}
          menuClicked={this.openMenu}
          width={40}
          height={20}
          strokeWidth={4}
          rotate={0}
          color="white"
          borderRadius={50}
          animationDuration={0.5}
        />
        <CheeseburgerMenu
          isOpen={this.state.menuOpen}
          closeCallback={this.closeMenu}
        >
          <div className="hiddenNav">
            <Link to="/" className="menuItem">
              HOME
            </Link>
            <Link to="/menus" className="menuItem">
              MENU
            </Link>
            <Link to="/recipes" className="menuItem">
              RECIPES
            </Link>
            <Link to="/about" className="menuItem">
              ABOUT
            </Link>
            <Link to="/contact" className="menuItem">
              CONTACT
            </Link>
            <a
              href="https://www.facebook.com/TheSquirrelsDrey"
              target="_blank"
              rel="noopener"
              className="menuItem"
            >
              FACEBOOK
            </a>
          </div>
        </CheeseburgerMenu>
      </ul>
    );
  }
}

export default Header;
