/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header extends Component {

  render() {
    return (
      <header className="Header">
        <h1>
          <span>Just</span> Blogging
        </h1>
        <Navigation className="Header-nav" />
      </header>
    );
  }
}
export default Header;
