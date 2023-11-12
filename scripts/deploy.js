// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

const path = require("path");
const { ethers } = require("hardhat");

async function main() {

  const Message = await ethers.getContractFactory("Message");
  const msg = await Message.deploy();

  console.log("Token address:", await msg.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });