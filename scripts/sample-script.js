const hre = require("hardhat");

async function main(){

    const Tx0x1119 = await hre.ethers.getContractFactory("Tx0x1119");
    // const greeter = await Greeter.deploy("hello, Hardhat!");
    const oo = await upgrades.deployProxy(Tx0x1119, { kind: 'uups' });

    // await greeter.deployed();
    console.log("Greeter deployed to:", oo.address);

}




main() 
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});

