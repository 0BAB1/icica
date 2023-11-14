import React, { useState } from 'react';

function Header({connectWallet, walletAddress}) {
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