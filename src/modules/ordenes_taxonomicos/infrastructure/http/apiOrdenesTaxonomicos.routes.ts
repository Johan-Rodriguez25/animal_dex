import { Router, Request } from "express";
import apicache from "apicache";
// import { AuthToken } from "../../../../common/middlewares/authToken";

//  controllers

import CreateOrdenesTaxonomicosController from "../../application/controller/createOrdenesTaxonomicasController";
import GetAllOrdenesTaxonomicosController from "../../application/controller/getAllOrdenesTaxonomicosController";
// import UpdateShippingOrderController from "../../app/controller/updateShippingOrderController";

//  router
const router = Router();

// const { authToken } = new AuthToken();

apicache.options({
  appendKey: (req: Request) => `${req.url}${JSON.stringify(req.body)}`,
});

// const cache = apicache.middleware;

const createOrdenesTaxonomicosController = new CreateOrdenesTaxonomicosController();
const getAllOrdenesTaxonomicosController = new GetAllOrdenesTaxonomicosController();
// const updateShippingOrderController = new UpdateShippingOrderController();

router.post(
  "/create",
  // [authToken],
  createOrdenesTaxonomicosController.createOrdenTaxonomico,
);
router.post(
  "/get/all",
  // [authToken],
  getAllOrdenesTaxonomicosController.getAllOrdenesTaxonomicos,
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
