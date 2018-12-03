import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment } from "semantic-ui-react";

const PostComponent = ({post }) => {
    return(
      <div className="PostComponent">
        <ul>
          { JSON.stringify(post) !== '{}' ? <li key={post.id}>
              <h1>Title: {post.title} </h1><br />
               {post.body}  
            </li> 
            : null
          }
        </ul>
        {JSON.stringify(post) !== '{}' ? 
          
            <Link className= "align-items: center;"
                to={{
                  pathname: `./contact/${post.userId}`
                }}
              >
              Author
            </Link>
            : null
        }
      </div>
  );
}

export default PostComponent;
