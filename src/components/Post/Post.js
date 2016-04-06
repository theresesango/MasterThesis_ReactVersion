/**
 * Created by Therese on 2016-02-20.
 */
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Post.css';
import withStyles from '../../decorators/withStyles';
import SubHeader from '../SubHeader';
import moment from 'moment';
import Link from '../Link';

@withStyles(styles)
class Post extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    this.context.onSetTitle(this.props.title);
    let day = moment(this.props.date).format("D");
    let month = moment(this.props.date).format("MMM");
    return (
      <div className="Post container">
          <article className="post">
            <div className="post-header-wrapp">
              <div className="triangle"></div>
              <div className="date-contaier">
                <div className="triangle-date"></div>
                <div className="squar">
                  <p className="date-day" >{day}</p>
                  <p className="date-month">{month}</p>
                </div>
              </div>
              <h2><a href={this.props.link} onClick={Link.handleClick}>{ this.props.title }</a>

              </h2>
            </div>
            <hr className="dotted-line" />
            <div className="post-content" dangerouslySetInnerHTML={{__html: this.props.post || ''}} />
          </article>
        </div>
    );
  }
}

export default Post;
