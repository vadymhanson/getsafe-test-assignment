import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <>
      <div>Looks like this page does not exist!</div>
      <div>
        <Link to="/">Back Home</Link>
      </div>
    </>
  )
};

export default NotFound;
