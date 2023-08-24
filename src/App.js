import React from 'react';
import Image from "./icons/farcry5.jpeg" 

const App = () => {
  return (
    <div>
      <h1>Hello, React App!</h1>
      <img src={Image} alt="Random Image" />
    </div>
  );
};

export default App;