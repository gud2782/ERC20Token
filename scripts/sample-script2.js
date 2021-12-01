const hre = require("hardhat");


async function main(){


    let private_key =
  "232129e6bf54d9a7034b4e57a2ade3fffec21edda59e538968af1dc43bffe0e9"
let send_token_amount = "1000"
let to_address = "0xB633FA14EbE4b627C01a72B30C95d1ce206c8f6e"
let send_address = "0x002Edd03be2C25987dDAA0A4FC66cB34525AA9ee"
let gas_limit = "0x100000"
let wallet = new ethers.Wallet(private_key)
let walletSigner = wallet.connect(global.ethersProvider)
let contract_address = "0x7F1F0ba0dD4A616b0627828DBde08d7b557Ee99D"
global.ethersProvider = new ethers.providers.InfuraProvider("ropsten")

send_token(
  contract_address,
  send_token_amount,
  to_address,
  send_address,
  private_key
)

function send_token(
    contract_address,
    send_token_amount,
    to_address,
    send_account,
    private_key
  ) {
    let wallet = new ethers.Wallet(private_key)
    let walletSigner = wallet.connect(global.ethersProvider)
  
    global.ethersProvider.getGasPrice().then((currentGasPrice) => {
      let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice))
      console.log(`gas_price: ${gas_price}`)
  
      if (contract_address) {
        // general token send
        let contract = new ethers.Contract(
          contract_address,
          send_abi,
          walletSigner
        )
  
        // How many tokens?
        let numberOfTokens = ethers.utils.parseUnits(send_token_amount, 18)
        console.log(`numberOfTokens: ${numberOfTokens}`)
  
        // Send tokens
        contract.transfer(to_address, numberOfTokens).then((transferResult) => {
          console.dir(transferResult)
          alert("sent token")
        })
      } // ether send
      else {
        const tx = {
          from: send_account,
          to: to_address,
          value: ethers.utils.parseEther(send_token_amount),
          nonce: window.ethersProvider.getTransactionCount(
            send_account,
            "latest"
          ),
          gasLimit: ethers.utils.hexlify(gas_limit), // 100000
          gasPrice: gas_price,
        }
        console.dir(tx)
        try {
          walletSigner.sendTransaction(tx).then((transaction) => {
            console.dir(transaction)
            alert("Send finished!")
          })
        } catch (error) {
          alert("failed to send!!")
        }
      }
    })
  }
  
    

    

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

