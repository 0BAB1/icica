require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia : {
      url: "https://ethereum-sepolia.publicnode.com", // Please consult https://chainlist.org/chain/11155111 to get a valid RPC URL
      accounts: [process.env.P_KEY]
    }
  }
};
