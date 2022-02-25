const Block = require("./Block");
const Blockchain = require("./Blockchain");

const blockchain = new Blockchain();
blockchain.addBlock(new Block(Date.now().toString(), ["Ravi", "Hyderabad"]));
blockchain.addBlock(new Block(Date.now().toString(), ["Aarav", "Delhi"]));
blockchain.addBlock(new Block(Date.now().toString(), ["Sweety", "Mumbai"]));

console.log(blockchain.chain);
//blockchain.chain[0].hash = 123;
console.log(blockchain.isValid());
