const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });


async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const whitelistContract = "0x3fFA0F6A668100836c8d481FDBDd1Ef39DC45e8A";
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = "ipfs://QmZBSbQVHWy8PWtgXHfzniKgYjoDMAci8TwSSnWj8gU5Ds/";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
  */
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  // deploy the contract
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  // print the address of the deployed contract
  console.log(
    "Crypto Devs Contract Address:",
    deployedCryptoDevsContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });