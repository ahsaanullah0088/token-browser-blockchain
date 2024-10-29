import React, { useState } from 'react';
import { ethers, utils } from 'ethers';

const App = () => {
  // Declare the state variables outside the return statement
  const [tokens, setTokens] = useState([]);
  const [address, setAddress] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    setAddress(address);
    fetchTokens()
    .then((data)=>{
      setTokens(data.assets);
    })
    .catch((err)=>setTokens([]));
  }
  const fetchTokens = async () => {
    if(!utils.isAddress(address)){
      alert('Invalid address');
      return;
        }
        const provider = new ethers.providers.JsonRpcProvider("https://few-methodical-sky.quiknode.pro/795b1dde3e26039cfa804e1b45017082ee52c018");
}

  return (
    <div>
      <h1>React with Ethers.js</h1>
      {/* Add any JSX or component rendering here */}
    </div>
  );
}

export default App;
