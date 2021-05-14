// Responsible for creating blocks

const SHA256 = require('crypto-js/sha256');

class cryptoBlock {
    constructor (index, timeStamp, data, preecedingHash="") {
        this.index = index;
        this.timeStamp = timeStamp;
        this.data = data;
        this.preecedingHash = preecedingHash;
        this.hash = this.computeHash();
    }

    computeHash () {
        // SHA256 returns an onject
        // converting it to a string
        return SHA256(this.index + this.preecedingHash + this.timeStamp  + JSON.stringify(this.data)).toString();
    }
}

module.exports = {
    cryptoBlock
}