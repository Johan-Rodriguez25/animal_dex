import { Router, Request } from "express";
import apicache from "apicache";
// import { AuthToken } from "../../../../common/middlewares/authToken";

//  controllers

import CreateCategoriaController from "../../application/controller/createCategoriasController";
import GetAllCategoriasController from "../../application/controller/getAllCategoriasController";
// import UpdateShippingOrderController from "../../app/controller/updateShippingOrderController";

//  router
const router = Router();

// const { authToken } = new AuthToken();

apicache.options({
  appendKey: (req: Request) => `${req.url}${JSON.stringify(req.body)}`,
});

// const cache = apicache.middleware;

const createCategoriaController = new CreateCategoriaController();
const getAllCategoriasController = new GetAllCategoriasController();
// const getShippingOrderController = new GetShippingOrderController();
// const updateShippingOrderController = new UpdateShippingOrderController();

router.post(
  "/create",
  // [authToken],
  createCategoriaController.createCategoria,
);
router.post(
  "/get/all",
  // [authToken],
  getAllCategoriasController.getAllCategorias,
);
/* router.post("/get", [authToken], getShippingOrderController.getShippingOrders);
router.post(
  "/get/id",
  [authToken],
  getShippingOrderController.getShippingOrderId,
);
router.post(
  "/get/all",
  [authToken],
  getShippingOrderController.getAllShippingOrders,
); */

export default router;
