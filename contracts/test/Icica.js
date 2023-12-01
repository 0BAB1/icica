const { expect } = require("chai");
const { ethers } = require("hardhat")

describe("Token contract", function () {
  it("Deployment should initialize correctly", async function () {
    const icica = await ethers.deployContract("Icica");
    expect(await icica.symbol()).to.equal("ICI");
    expect(await icica.name()).to.equal("Icica");
  });
});