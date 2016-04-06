/**
 * Created by Therese on 2016-02-20.
 */

import React, { PropTypes, Component } from 'react';
import styles from './AboutPage.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class AboutPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'About';
    this.context.onSetTitle(title);
    return (
      <div className="AboutPage">
        <div className="colum-wrapper">
          <div className="sidebar">
            <h3>Therese Sangö</h3>
            <img src={require('./theresesangoCVBild.png')} />
            <p>Phasellus ac metus augue. Suspendisse mollis, risus vitae vulputate consectetur, nulla nulla laoreet nisi, at commodo erat leo id urna. Nunc eget sapien dui. Duis varius leo sit amet libero condimentum vulputate. <span>therese.sangoe@gmail.com</span></p>
          </div>

          <div className="container">
            <article className="post">
              <div className="post-header-wrapp">
                <div className="triangle"></div>
                <h2>About</h2>

              </div>
              <hr className="dotted-line" />
              <div className="post-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit volutpat.
                  Eu pellentesque tellus. Vestibulum ac commodo orci, imperdiet sagittis arcu. Cras eleifend turpis lacinia lacus laoreet varius. Nullam auctor molestie tortor vel pellentesque. Fusce et est at lectus euismod finibus a vel lectus. In vulputate quam non risus commodo, eget mattis lacus interdum. Vestibulum vitae lacus lacus. Duis consequat eros tortor, et tempor lacus tristique et. Donec ultricies diam vitae tincidunt semper. Morbi ac enim consequat, euismod nibh et, pretium libero. Maecenas auctor suscipit elementum. Vivamus non velit sit amet metus lobortis.
                </p>
                <p>
                  Proin non ipsum nunc. Curabitur ante tortor, laoreet nec mauris nec, condimentum accumsan purus. Aenean pharetra metus lobortis imperdiet tincidunt. Vivamus nec nunc dolor. Fusce vel faucibus odio. Maecenas pharetra diam ac luctus lobortis. Suspendisse potenti. Sed pulvinar rutrum libero, id semper arcu consequat non. Nunc id nisi nisi. Nulla nec molestie risus, sit amet dignissim neque. Vivamus venenatis justo lacus, et malesuada neque viverra sit amet. Maecenas volutpat commodo justo, sed venenatis elit cursus.
                </p>
              </div>
            </article>

          </div>
        </div>
      </div>
    );
  }

}

  export default AboutPage;
