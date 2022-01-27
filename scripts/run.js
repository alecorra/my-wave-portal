// The Hardhat Runtime Environment, or HRE for short,
// is an object containing all the functionality
// that Hardhat exposes when running a task, test or script.
// In reality, Hardhat is the HRE.

// Every time we run a terminal command that starts with npx hardhat,
// we are getting this hre object built on the fly using the hardhat.config.js specified in our code!
// This means we will never have to actually do some sort of import into our files like:
// const hre = require("hardhat")

const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to: ", waveContract.address);
  console.log("Contract deployed by: ", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  waveTxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();