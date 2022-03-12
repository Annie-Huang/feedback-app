import React from 'react';
import { useParams } from 'react-router-dom';
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';

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
  const status = 200;

  const navigate = useNavigate();

  const onClick = () => {
    console.log('Hello');
    navigate('/about');
  };

  if (status === 404) {
    return <Navigate to='/notfound' />;
  }

  return (
    <div>
      <h1>POST</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>Hello World</h1>} />
      </Routes>
    </div>
  );
};

export default Post;
