import React, { Component } from "react";
import PostComponent from "./Post";
import DropdownSearch from "./DropdownSearch";
import CommentsComponent from './Comments';
//[ { key: 'AL', value: 'AL', text: 'Alabama' }, ...  ]
class Home extends Component {
  constructor() {
    super();
    this.state = { posts: [], post: {}, comments: []};
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

  loadSinglePost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(post => {
        this.setState({
          post
        });
        this.loadComments(this.state.post.id);
        console.log(this.state.post);
      });
  }

  loadComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(res => res.json())
    .then(comments => {
      this.setState({
        comments
      });
      
      console.log('comment:', this.state.comments);
    });
  }

  componentDidMount() {
    this.loadPosts();
  }
  getValue(target){
    console.log('target:', target);
    this.loadSinglePost(target);
  }

  idValueFunction = valor => {
    this.setState({
      idValue:valor
    })
  };


  render() {
    return (
      <div>
        <DropdownSearch posts={this.state.posts} getValue={this.getValue} returnIdValue={this.idValueFunction}/>
        <PostComponent post={this.state.post}/>
        <CommentsComponent comments={this.state.comments}/>
      </div>
    );
  }
}

export default Home;
