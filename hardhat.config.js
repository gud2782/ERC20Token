//  hardhat.config.js

require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
let secret = require("./secret")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.3",
  networks: {
    ropsten: {
      url: secret.url,
      accounts: [secret.key]
    }
  }
};