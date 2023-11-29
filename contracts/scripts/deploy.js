// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const icica = await hre.ethers.deployContract("Icica");
  await icica.waitForDeployment();
  // Get contract data to display in console
  const symbol = await icica.symbol();
  const name = await icica.name();
  console.log(`Contract ${name} (${symbol}) deployed to: ${icica.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
