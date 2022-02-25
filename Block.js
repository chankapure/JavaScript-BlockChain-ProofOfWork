const crypto = require("crypto");
const SHA256 = (message) =>
  crypto.createHash("sha256").update(message).digest("hex");

class Block {
  constructor(timestamp = "", data = []) {
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.getHash();
    this.prevHash = "";
    this.nonce = 0;
  }

  getHash() {
    const hash = SHA256(
      JSON.stringify(this.data) + this.timestamp + this.prevHash + this.nonce
    );
    return hash;
  }

  mine(difficulty) {
    while (!this.hash.startsWith(Array(difficulty + 1).join("0"))) {
      this.nonce++;
      this.hash = this.getHash();
    }
  }
}

module.exports = Block;
