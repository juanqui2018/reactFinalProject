import React from 'react';

const CommentsComponent = ({comments }) => {
         return(
          
          <div className="Comments">
            <h1>Comments</h1>
            <ul>
              {   comments.map(item => (
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
