import { Router, Request } from "express";
import apicache from "apicache";
// import { AuthToken } from "../../../../common/middlewares/authToken";

//  controllers

import CreateFamiliasTaxonomicasController from "../../application/controller/createFamiliasTaxonomicasController";
import GetAllFamiliasTaxonomicasController from "../../application/controller/getAllFamiliasTaxonomicasController";
// import UpdateShippingOrderController from "../../app/controller/updateShippingOrderController";

//  router
const router = Router();

// const { authToken } = new AuthToken();

apicache.options({
  appendKey: (req: Request) => `${req.url}${JSON.stringify(req.body)}`,
});

// const cache = apicache.middleware;

const createFamiliasTaxonomicasController = new CreateFamiliasTaxonomicasController();
const getAllFamiliasTaxonomicasController = new GetAllFamiliasTaxonomicasController();
// const getShippingOrderController = new GetShippingOrderController();
// const updateShippingOrderController = new UpdateShippingOrderController();

router.post(
  "/create",
  // [authToken],
  createFamiliasTaxonomicasController.createFamiliaTaxonomica,
);
router.post(
  "/get/all",
  // [authToken],
  getAllFamiliasTaxonomicasController.getAllFamiliasTaxonomicas,
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
