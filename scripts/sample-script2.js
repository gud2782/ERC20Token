const hre = require("hardhat");


async function main(){

    const Tx0x11192 = await hre.ethers.getContractFactory("Tx0x11192");
    // const greeter = await Greeter.deploy("hello, Hardhat!");
    const oo = await hre.upgrades.upgradeProxy("0x7F1F0ba0dD4A616b0627828DBde08d7b557Ee99D" ,Tx0x11192);

    // assert(await oo.version() === 'v2');

    // await greeter.deployed();
    console.log("Greeter deployed to:", oo.address);

}
 

main() 
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});

