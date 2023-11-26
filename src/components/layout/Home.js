import React from 'react';

const Home = ({ logOut }) => {
  console.log("logOut prop in Home:", logOut);

  return (
    <div className="Home-page">
      <h1>Home</h1>
      <p>This is the home page</p>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default Home;
