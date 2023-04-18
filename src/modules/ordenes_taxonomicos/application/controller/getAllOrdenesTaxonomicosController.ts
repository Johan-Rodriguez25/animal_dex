import { Request, Response } from "express";
import ResponseExpress from "../../../../common/adapters/responseExpressAdapter";
import { GetAllOrdenesTaxonomicosService } from "../../domain/service/getAllOrdenesTaxonomicos.service";

class GetAllOrdenesTaxonomicosController {
  // eslint-disable-next-line consistent-return
  public async getAllOrdenesTaxonomicos(req: Request, res: Response): Promise<any> {
    const responseExpress = new ResponseExpress();
    try {
      const service = new GetAllOrdenesTaxonomicosService();
      const result = await service.getAllOrdenesTaxonomicos();
      return responseExpress.successResponse(res, result[0]);
    } catch (error) {
      return responseExpress.errorResponse(res, error as Error);
    }
  }
}

export default GetAllOrdenesTaxonomicosController;
