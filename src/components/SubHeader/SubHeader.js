/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './SubHeader.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class SubHeader extends Component {

  render() {
    return (
      <div className="SubHeader">
        <p className="welcoming-text">
          Welcome to my exiting project about React.Js. Hopfully you will notice the difference between the two sites i've built with different technologies.
        </p>
        <p className="welcoming-text">
          Let's start this thing!
        </p>
      </div>
    );
  }

}

export default SubHeader;
