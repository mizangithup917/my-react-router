import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
  const user = useLoaderData();

  console.log(user);
  return (
    <div>
      <h1>This is User Details</h1>
    </div>
  );
};

export default UserDetails;