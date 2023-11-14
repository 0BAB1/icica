import Header from './components/Header';
import Banner from './components/Banner';
import Editor from './components/Editor';
import Tutorial from './components/Tutorial';
import { useState, useEffect } from 'react';
import { ethers, providers } from 'ethers';

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(()=>{
    const init = async function(){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractAdress = "0xdc64a140aa3e981100a9beca4e685f962f0cf6c9";
      
    }
  })

  async function connectWallet(){
       // To connect to the user's wallet, we have to run this method.
      // It returns a promise that will resolve to the user's address.
      const [selectedAddress] = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(selectedAddress);
  }

  return (
    <div className='App'>
      <Header connectWallet={connectWallet} walletAddress={walletAddress}/>
      <Banner />
      <Editor />
      <Tutorial />
    </div>
  );
}

export default App;