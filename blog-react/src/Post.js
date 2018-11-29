import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PostComponent = ({post }) => {
    return(
      <div className="PostComponent">
        <ul>
          { JSON.stringify(post) !== '{}' ? <li key={post.id}>
              Email: {post.title} <br />
              body: {post.body}  
            </li> : null
          }
        </ul>
        <Link
            to={{
              pathname: `/contact/${post.userId}`
            }}
          >
          Contact
        </Link>
      </div>
  );
}

// class PostComponent extends Component {
//   constructor(props){
//     const changeId = 1;
//     super(props);
//     this.state = {
//         items: [],
//         isLoaded: false,
//     }
//   }
//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/posts/?myparam1={setIdValue}/comments')
//       .then(res => res.json())
//       .then(json => {
//         this.setState({
//           isLoaded: true,
//           items: json,
//         })
//       });
//   }
//   render() {
//     var { isLoaded, items } = this.state;
//     if(!isLoaded){
//       return <div>Loading . . . </div>
//     }
//     else{
//       return(
//           <div className="Comments">
//             <ul>
//               {items.map(item => (
//                   <li key={item.id}>

//                     <div className="avatar">
//                         <img alt='doug' src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
//                     </div>

//                     Email: {item.email} <br />
//                     body: {item.body}  



//                   </li>
//               ))};
//             </ul>
//           </div>
//       );
//     }
//   }


// }

export default PostComponent;
