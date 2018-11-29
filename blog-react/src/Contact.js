import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: parseInt(this.props.match.params.id),
      author: {},
      company: {}
    };
    console.log("authorId:", this.state.authorId);
  }
  componentDidMount() {
    this.getAuthorById(this.state.authorId);
  }
  getAuthorById(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(author => {
        this.setState({
          author,
          company: author.company
        });
        console.log(this.state.company);
      });
  }

  render() {
    const { username, email, phone, website } = this.state.author;
    const { name } = this.state.company;
    return (

      <div>
        <label>Atuhor:  {username} </label>
              <Segment>
              <div className="ui form">
                <div className="two fields">
                  <div className="field">
                    <label>Username</label>
                    <input placeholder={username} readOnly="" type="text" />
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input placeholder={email} readOnly="" type="text" />
                  </div>
                </div>
              </div>
              <div className="ui form">
                <div className="two fields">
                  <div className="field">
                    <label>Phone</label>
                    <input placeholder={phone} readOnly="" type="text" />
                  </div>
                  <div className="field">
                    <label>Website</label>
                    <input placeholder={website} readOnly="" type="text" />
                  </div>
                </div>
              </div>
              <div className="ui form">
                <div className="two fields">
                  <div className="field">
                    <label>Company</label>
                    <input placeholder={name} readOnly="" type="text" />
                  </div>
                </div>
              </div>
            </Segment>
      </div>
      
    );
  }
}

export default Contact;
