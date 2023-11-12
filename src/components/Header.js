import React, { useState } from 'react';

function Header() {
    const [walletAddress, setWalletAddress] = useState("");

    async function connectWallet(){
         // To connect to the user's wallet, we have to run this method.
        // It returns a promise that will resolve to the user's address.
        const [selectedAddress] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(selectedAddress);
    }

    return (
        <div className='Header'>
            <div className='dummy'>

            </div>
            <div>
                <h1>Ici ça &lt;Votre idée&gt;</h1>
                <p>Une web app de Hugo BABIN-RIBY</p>
            </div>
            <div className='connect-wallet-wrapper'>
                <button className='wallet-button' onClick={connectWallet}>
                    {walletAddress == "" ? "Connect Wallet": walletAddress.slice(0,10) + "..."}
                </button>
            </div>
        </div>
    );
}

export default Header;