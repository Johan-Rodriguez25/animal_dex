import { Router, Request } from "express";
import apicache from "apicache";
// import { AuthToken } from "../../../../common/middlewares/authToken";

//  controllers

import CreateEspecieController from "../../application/controller/createEspecieController";
import GetAllEspeciesController from "../../application/controller/getAllEspeciesController";
// import UpdateShippingOrderController from "../../app/controller/updateShippingOrderController";

//  router
const router = Router();

// const { authToken } = new AuthToken();

apicache.options({
  appendKey: (req: Request) => `${req.url}${JSON.stringify(req.body)}`,
});

// const cache = apicache.middleware;

const createEspecieController = new CreateEspecieController();
const getAllEspeciesController = new GetAllEspeciesController();
// const updateShippingOrderController = new UpdateShippingOrderController();

router.post(
  "/create",
  // [authToken],
  createEspecieController.createEspecie,
);
router.post(
  "/get/all",
  // [authToken],
  getAllEspeciesController.getAllEspecies,
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
