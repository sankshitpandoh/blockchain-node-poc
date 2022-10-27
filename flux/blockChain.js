const {cryptoBlock} = require('./cryptoBlock');

class cryptoBlockChain {
    constructor () {
        this.blockChain = [this.initializeFirstBlock()];
        this.difficulty = 3;
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
            newBlock.proofOfWork(this.difficulty);
            this.blockChain.push(newBlock);
        } else {
            console.log("No data found for adding new block");
        }
    }

    checkChainVaildity () {
        // Starting from index 1 as first genesis block will be already added by the system
        for (let i = 1; i < this.blockChain.length; i++) {
            let currentBlock = this.blockChain[i];
            let preceedingBlock = this.blockChain[i -1];

            if (currentBlock.hash !== currentBlock.computeHash()) {
                return false;
            }
            if (currentBlock.preecedingHash !== preceedingBlock.hash) {
                return false;
            }
        }
        return true;
    }
}


module.exports = {
    cryptoBlockChain
}