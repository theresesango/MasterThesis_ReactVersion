/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
    <nav id="main-nav" className={classNames(this.props.className, 'Navigation')} role="navigation">
      <li><a href="/" onClick={Link.handleClick}>Blogg</a></li>
      <li><a href="/about" onClick={Link.handleClick}>About</a></li>
      <li><a href="/contact" onClick={Link.handleClick}>Contact</a></li>
    </nav>
    );
  }

}

export default Navigation;
