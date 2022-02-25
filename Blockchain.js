const Block = require("./Block");

class Blockchain {
  constructor() {
    this.chain = [new Block(Date.toString())];
    this.difficulty = 1;
    this.blockTime = 30000;
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(block) {
    block.prevHash = this.getLastBlock().hash;
    block.hash = block.getHash();
    block.mine(this.difficulty);
    this.chain.push(block);

    this.difficulty +=
      Date.now() - parseInt(this.getLastBlock().timestamp) < this.blockTime
        ? 1
        : -1;
  }

  isValid(blockchain = this) {
    for (var i = 1; i <= blockchain.chain.length; i++) {
      const currentBlock = blockchain.chain[i];
      const prevBlock = blockchain.chain[i - 1];

      if (
        currentBlock.hash !== currentBlock.getHash() ||
        currentBlock.prevHash !== prevBlock.hash
      ) {
        return false;
      }
      return true;
    }
  }
}

module.exports = Blockchain;
