// This ia test file written to check basic functionality of our bloack chain

const {cryptoBlock} = require( './flux/cryptoBlock');
const {cryptoBlockChain} = require( './flux/blockChain');

let echoCoin = new cryptoBlockChain();

console.log("Starting to Mine :::: echoCoin" );

setTimeout(() => {
    echoCoin.addNewBlock (
        new cryptoBlock (
            1 ,
            Date.now(),
            {
                sender: "Sankshit Pandoh",
                rececipent: "Rick Sanchez",
                quantity: 69
            }
        )
    )
    
    
    echoCoin.addNewBlock (
        new cryptoBlock (
            2 ,
            Date.now(),
            {
                sender: "Rick Sanchez",
                rececipent: "Rick Sanchez",
                quantity: 420
            }
        )
    )
    
    console.log(JSON.stringify(echoCoin, null, 4));
}, 500)