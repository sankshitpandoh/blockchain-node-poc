// Responsible for creating blocks

const SHA256 = require('crypto-js/sha256');

class cryptoBlock {
    constructor (index, timeStamp, data, preecedingHash="") {
        this.index = index;
        this.timeStamp = timeStamp;
        this.data = data;
        this.preecedingHash = preecedingHash;
        this.hash = this.computeHash();
        this.nonceCount = 0;
    }

    computeHash () {
        // SHA256 returns an onject
        // converting it to a string
        return SHA256(this.index + this.preecedingHash + this.timeStamp  + JSON.stringify(this.data) + this.nonceCount).toString();
    }

    proofOfWork (difficulty) {
        while (this.hash.substring(0, difficulty) !==Array(difficulty+1).join("0")) {
            this.nonceCount++;
            console.log("Total number of iterations::::: ", this.nonceCount);
            this.hash = this.computeHash();
        }
    }
}

module.exports = {
    cryptoBlock
}