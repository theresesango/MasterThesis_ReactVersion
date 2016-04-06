/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
/* Index, list of all bloggposts */
import React, { PropTypes, Component } from 'react';
import styles from './PostListPage.css';
import withStyles from '../../decorators/withStyles';
import SubHeader from '../SubHeader';
import Post from '../Post';
import Link from '../Link';

@withStyles(styles)
class PostListPage extends Component {
  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Blogg';
    this.context.onSetTitle(title);
    return (
      <div>
        <SubHeader />
        <div className="PostListPag">
          {this.props.blogPosts.map((blogPost)=>{
            return (
              <Post {...blogPost}/>
            )})}
        </div>
      </div>
    );
  }
}
export default PostListPage;
