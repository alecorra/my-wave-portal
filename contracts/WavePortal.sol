// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract WavePortal {
  uint256 totalWaves;

  constructor() {
    console.log("I'm the smart contract!");
  }

  // public here means that the function become available to be called on the blockchain;
  // this is like a public API endpoint!
  function wave() public {
    totalWaves += 1;

    // msg.sender is the wallet address of the person who called the function.
    // it's like a built-in authentication
    console.log("%s has waved!", msg.sender);
  }

  function getTotalWaves() public view returns (uint256) {
    console.log("We have %d total waves!", totalWaves);
    return totalWaves;
  }
}
