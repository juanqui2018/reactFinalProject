import React, { Component } from 'react';


class Comments extends Component {
  constructor(props){
    super(props);
    this.state = {
        items: [],
        isLoaded: false,
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts/5/comments')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }
  render() {
    var { isLoaded, items } = this.state;
    if(!isLoaded){
      return <div>Loading . . . </div>
    }
    else{
      return(
          <div className="Comments">
            <ul>
              {items.map(item => (
                  <li key={item.id}>

                    <div className="avatar">
                        <img alt='doug' src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
                    </div>

                    Email: {item.email} <br />
                    body: {item.body}  



                  </li>
              ))};
            </ul>
          </div>
      );
    }
  }


}

export default Comments;
