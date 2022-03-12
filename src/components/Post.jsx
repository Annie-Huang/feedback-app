import React from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

/*const Post = () => {
  const params = useParams();

  return (
    <div>
      <h1>POST {params.id}</h1>
      <p>Name: {params.name}</p>
    </div>
  );
};*/

const Post = () => {
  const status = 404;

  if (status === 404) {
    return <Navigate to='/notfound' />;
  }

  return (
    <div>
      <h1>POST</h1>
    </div>
  );
};

export default Post;
