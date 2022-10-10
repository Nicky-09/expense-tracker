const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//cateogory schema field => [type , color]

const categorySchema = new Schema({
  type: {
    type: String,
    default: "Investment",
  },
  color: {
    type: String,
    default: "#fcbe44",
  },
  percent: {
    type: Number,
  },
});

const transactionSchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
    default: "Investment",
  },
  amount: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Categories = mongoose.model("categories", categorySchema);
const Transaction = mongoose.model("transaction", transactionSchema);

exports.default = Transaction;
module.exports = { Categories, Transaction };
