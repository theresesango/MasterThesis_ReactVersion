/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './ContactPage.css';
import withStyles from '../../decorators/withStyles';
import SubHeader from '../SubHeader';
import http from '../../core/HttpClient';

const FORM_STATE_OPEN = 0;
const FORM_STATE_SENDING = 1;
const FORM_STATE_SENT = 2;

@withStyles(styles)
class ContactPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      name : '',
      email : '',
      story : '',
      formState : FORM_STATE_OPEN
    };
  }

  handleChange(e){
    let state = {};
    state[e.target.id]=e.target.value;
    this.setState(state);
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({formState : FORM_STATE_SENDING});
    let request = http.post(
      "/api/contact",
      {
        name: this.state.name,
        email: this.state.email,
        story: this.state.story
      }
    ).then(() => {
      this.setState({
        formState : FORM_STATE_SENT,
        name: '',
        email: '',
        story: ''
      });
    });
  }

  render() {
    const title = 'Contact Me';
    this.context.onSetTitle(title);

    switch(this.state.formState) {
      case FORM_STATE_SENDING:
        return (
          <div className="ContactPage">
            <SubHeader />
            <div className="container">
              <article className="post">
                <div className="post-header-wrapp">
                  <div className="triangle"></div>
                  <h2>
                    Do you want to tell me a story or just simplpy ask me something, please contact me!
                  </h2>
                </div>
                <hr className="dotted-line"/>
                <p>Sending!</p>
              </article>
            </div>
          </div>
        );
      break;
      case FORM_STATE_SENT:
        return (
          <div className="ContactPage">
            <SubHeader />
            <div className="container">
              <article className="post">
                <div className="post-header-wrapp">
                  <div className="triangle"></div>
                  <h2>
                    Do you want to tell me a story or just simplpy ask me something, please contact me!
                  </h2>
                </div>
                <hr className="dotted-line"/>
                <p>Thank you!</p>
              </article>
            </div>
          </div>
        );
      break;
      case FORM_STATE_OPEN:
      default:
        return (
          <div className="ContactPage">
            <SubHeader />
            <div className="container">
              <article className="post">
                <div className="post-header-wrapp">
                  <div className="triangle"></div>
                  <h2>
                    Do you want to tell me a story or just simplpy ask me something, please contact me!
                  </h2>
                </div>
                <hr className="dotted-line"/>
                <div className="post-content">
                  <form className="contact-form" method="post" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="wrapp-name-email">
                      <div className="name">
                        <label for="name">Name</label><br />
                        <input type="text" id="name" onChange={this.handleChange.bind(this)} value={this.state.name}/>
                      </div>
                      <div className="email">
                        <label for="email">E-mail</label><br />
                        <input type="email" id="email" onChange={this.handleChange.bind(this)}
                               value={this.state.email}/>
                      </div>
                    </div>
                    <div className="story">
                      <label for="story">Your story</label><br />
                      <textarea id="story" type="text" onChange={this.handleChange.bind(this)}
                                value={this.state.story}/>
                    </div>
                    <input type="submit" id="submit-contact-form" value="SEND"/>
                  </form>
                </div>
              </article>

            </div>
          </div>
        );
      break;
    }
  }

}

export default ContactPage;
