import { Request, Response } from "express";
import ResponseExpress from "../../../../common/adapters/responseExpressAdapter";
import { GetAllClasesTaxonomicasService } from "../../domain/service/getAllClaseTaxonomica.service";

class GetAllClasesTaxonomicasController {
  // eslint-disable-next-line consistent-return
  public async getAllClasesTaxonomicasService(req: Request, res: Response): Promise<any> {
    const responseExpress = new ResponseExpress();
    try {
      const service = new GetAllClasesTaxonomicasService();
      const result = await service.getAllClasesTaxonomicas();
      return responseExpress.successResponse(res, result[0]);
    } catch (error) {
      return responseExpress.errorResponse(res, error as Error);
    }
  }
}

export default GetAllClasesTaxonomicasController;
