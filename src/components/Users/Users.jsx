import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {

  const Users = useLoaderData();
  console.log(Users)

  return (
    <div>
      <h1>This is users</h1>
    </div>
  );
};

export default Users;