const {cryptoBlock} = require('./cryptoBlock');

class cryptoBlockChain {
    constructor () {
        this.blockChain = [this.initializeFirstBlock()];
    }

    initializeFirstBlock () {
        return new cryptoBlock(0, Date.now(), "First / Genesis BLock of the chain", "0");
    }

    obtainLatestBlock () {
        return this.blockChain[this.blockChain.length - 1];
    }

    addNewBlock (newBlock) {
        if (newBlock) {
            newBlock["preceedingHash"] = this.obtainLatestBlock().hash;
            newBlock["hash"] = newBlock.computeHash();
            this.blockChain.push(newBlock)
        } else {
            console.log("No data found for adding new block");
        }
    }
}


module.exports = {
    cryptoBlockChain
}