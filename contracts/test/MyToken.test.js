// test/MyToken.test.js

const { ethers, upgrades } = require('hardhat');

describe('Tx0x1119', function () {
  it('deploys', async function () {
    const Tx0x1119 = await ethers.getContractFactory('Tx0x1119');
    await Tx0x1119.deploy();

  
    await upgrades.deployProxy(Tx0x1119, { kind: 'uups' });
  });
});