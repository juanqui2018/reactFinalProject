import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PostComponent = ({post }) => {
    return(
      <div className="PostComponent">
        <ul>
          { JSON.stringify(post) !== '{}' ? <li key={post.id}>
              Title: {post.title} <br />
                     {post.body}  
            </li> : null
          }
        </ul>
        <Link
            to={{
              pathname: `./contact/${post.userId}`
            }}
          >
          Author
        </Link>
      </div>
  );
}

export default PostComponent;
