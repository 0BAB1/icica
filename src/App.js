import Header from './components/Header';
import Banner from './components/Banner';
import Editor from './components/Editor';
import Tutorial from './components/Tutorial';
import { useState} from 'react';
import Icica from './Icica.json';
const ethers = require("ethers");

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  async function connectWallet(){
       // To connect to the user's wallet, we have to run this method.
      // It returns a promise that will resolve to the user's address.
      const [selectedAddress] = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(selectedAddress);
  }

  async function mint(){
    if(typeof window.ethereum !== 'undefined'){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      //contract address on sepolia TESTNET : 0x0c62755c850bdb0Ff70c52df0c1D90EBb778b8a0
      const contract = new ethers.Contract("0x0c62755c850bdb0Ff70c52df0c1D90EBb778b8a0", Icica.abi, signer);
      // test account to recive nft : 0xC6Df159837715D15B9910D804dEe6A39cF97a4B3
      const tx = await contract.mintNFT("0xC6Df159837715D15B9910D804dEe6A39cF97a4B3", "ipfs://bafkreibiq4io45wma7gdhwi3vzcjlodg5fz7os25laxnqtli3hllhwpvuq");
      await tx.wait();
      console.log("NFT minted! @" + tx.hash);
    }
  }

  return (
    <div className='App'>
      <Header connectWallet={connectWallet} walletAddress={walletAddress}/>
      <Banner />
      <Editor mint={mint}/>
      <Tutorial />
    </div>
  );
}

export default App;