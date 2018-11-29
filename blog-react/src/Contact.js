import React, { Component } from "react";
import { Segment, Label, Input } from "semantic-ui-react";
 
class Contact extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      authorId: parseInt(this.props.match.params.id),
      author: {}
    }
    console.log('authorId:', this.state.authorId);
  }
  componentDidMount() {
    this.getAuthorById(this.state.authorId);
  }
  getAuthorById(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(author => {
        this.setState({
          author
        });
        
        console.log(this.state.author);
      });
  }

  render() {
    const {author} = this.state;
    return (
      <Segment>
        <div className="ui form">
          <div className="two fields">
            <div className="field">
              <label>Username</label>
              <input placeholder={author.username} readOnly="" type="text" />
            </div>
            <div className="field">
              <label>Email</label>
              <input placeholder={author.email} readOnly="" type="text" />
            </div>
          </div>
        </div>
      </Segment>
    );
  }
}
 
export default Contact;