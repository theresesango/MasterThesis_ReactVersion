/**
 * Created by Therese on 2016-02-20.
 */
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './PostPage.css';
import withStyles from '../../decorators/withStyles';
import SubHeader from '../SubHeader';
import moment from 'moment';

@withStyles(styles)
class PostPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    this.context.onSetTitle(this.props.title);
    let day = moment(this.props.date).format("D");
    let month = moment(this.props.date).format("MMM");
    return (
      <div className="PostPage">
        <SubHeader />
        <div className="container">
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
              <h2>
                { this.props.title }
              </h2>
            </div>
            <hr className="dotted-line" />
            <div className="post-content" dangerouslySetInnerHTML={{__html: this.props.post || ''}} />

          </article>
          <nav className="post-navigation">
            <div className="left-wrapper">
              <a href="#" className="previus">
                <span className="triangle"></span>
                <span className="text">Previus</span>
              </a>
            </div>
            <div className="right-wrapper">
              <a href="#" className="next">
                <span className="text">Next</span>
                <span className="triangle"></span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    );
  }

}

export default PostPage;
