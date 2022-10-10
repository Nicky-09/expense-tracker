const model = require("../models/model");

//post categories http://localhost:7001/api/categories
async function createCategory(req, res) {
  const Create = new model.Categories({
    type: "Investment",
    color: "#c43095",
    percent: 0,
  });
  await Create.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category.",
      });
    });
}

//get categories http://localhost:7001/api/categorie
async function getCategories(req, res) {
  let data = await model.Categories.find({});
  let filterData = await data.map((v) =>
    Object.assign({}, { type: v.type, color: v.color })
  );
  res.send(filterData);
}

//post transaction http://localhost:7001/api/createTransaction
async function createTransactions(req, res) {
  if (!req.body) return res.status(400).json("Request body is missing");
  let { name, type, amount, date } = req.body;

  const create = await new model.Transaction({
    name,
    type,
    amount,
    date,
  });

  create.save(function (err) {
    if (!err) return res.json(create);
    return res
      .status(400)
      .json({ message: `Error while creating transaction ${err}` });
  });
}

//get transaction http://localhost:7001/api/getTransaction

async function getTransactions(req, res) {
  let data = await model.Transaction.find({});
  let filterData = await data.map((v) =>
    Object.assign(
      {},
      { name: v.name, type: v.type, amount: v.amount, date: v.date }
    )
  );
  res.json(filterData);
}

//delete transaction http://localhost:7001/api/deleteTransaction

async function deleteTransactions(req, res) {
  if (!req.body) res.status(400).json("Request body is missing");
  await model.Transaction.deleteOne(req.body, function (err) {
    if (!err) res.json("Deleted Successfully");
  })
    .clone()
    .catch(function (err) {
      res.json("error while deleting");
    });
}

//get labels http://localhost:7001/api/getLabels

async function getLabels(req, res) {
  model.Transaction.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "type",
        foreignField: "type",
        as: "categories_info",
      },
    },
    {
      $unwind: "$categories_info",
    },
  ])
    .then((result) => {
      let data = result.map((v) =>
        Object.assign(
          {},
          {
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            // color: v.categories_info.color,
            color: v.categories_info["color"],
          }
        )
      );
      res.json(data);
    })
    .catch((err) => {
      res
        .status(400)
        .json(`Some lookup error occurred while retrieving labels. ${err}`);
    });
}

module.exports = {
  createCategory,
  getCategories,
  createTransactions,
  getTransactions,
  deleteTransactions,
  getLabels,
};
