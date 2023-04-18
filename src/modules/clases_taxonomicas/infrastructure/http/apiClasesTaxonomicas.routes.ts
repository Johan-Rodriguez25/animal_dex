import { Router, Request } from "express";
import apicache from "apicache";
// import { AuthToken } from "../../../../common/middlewares/authToken";

//  controllers

import CreateClasesTaxonomicasController from "../../application/controller/createClasesTaxonomicasController";
import GetAllClasesTaxonomicasController from "../../application/controller/getAllClasesTaxonomicasController";
// import UpdateShippingOrderController from "../../app/controller/updateShippingOrderController";

//  router
const router = Router();

// const { authToken } = new AuthToken();

apicache.options({
  appendKey: (req: Request) => `${req.url}${JSON.stringify(req.body)}`,
});

// const cache = apicache.middleware;

const createClasesTaxonomicasController = new CreateClasesTaxonomicasController();
const getAllClasesTaxonomicasController = new GetAllClasesTaxonomicasController();
// const updateShippingOrderController = new UpdateShippingOrderController();

router.post(
  "/create",
  // [authToken],
  createClasesTaxonomicasController.createClaseTaxonomica,
);
router.post(
  "/get/all",
  // [authToken],
  getAllClasesTaxonomicasController.getAllClasesTaxonomicasService,
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
