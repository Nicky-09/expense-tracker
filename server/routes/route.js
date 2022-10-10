const routes = require("express").Router();
const controller = require("../controllers/controller");

routes.route("/api/categories").post(controller.createCategory);
routes.route("/api/categories").get(controller.getCategories);

routes
  .route("/api/transaction")
  .post(controller.createTransactions)
  .get(controller.getTransactions)
  .delete(controller.deleteTransactions);

routes.route("/api/labels").get(controller.getLabels);

module.exports = routes;
