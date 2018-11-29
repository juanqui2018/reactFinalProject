import React, { Component } from 'react';

const CommentsComponent = ({comments }) => {
         return(
          <div className="Comments">
            <ul>
              {comments.map(item => (
                  <li key={item.id}>
                    Email: {item.email} <br />
                    Body: {item.body}  
                  </li>
              ))}
            </ul>
          </div>
      );
}

export default CommentsComponent;
