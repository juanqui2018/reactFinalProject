import React, { Component } from "react";
import Comments from "./Comments";
import DropdownSearch from "./DropdownSearch";
//[ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]
class Home extends Component {
  constructor() {
    super();
    this.state = { posts: [] };
    this.getValue = this.getValue.bind(this);
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(json => {
        const aux = json.map(({ userId, id, title, body }) => ({
          userId,
          key: id,
          value: id,
          text: title,
          body
        }));
        this.setState({ posts: aux });
        console.log(this.state.posts);
      });
  }
  componentDidMount() {
    this.loadPosts();
  }
  getValue(value){
    console.log(value);
    //alert(value);
  }
  render() {
    return (
      <div>
        <DropdownSearch posts={this.state.posts} getValue={this.getValue}/>
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        <Comments />
      </div>
    );
  }
}

export default Home;
