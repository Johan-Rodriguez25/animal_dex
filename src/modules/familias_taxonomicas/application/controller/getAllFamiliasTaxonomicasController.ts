import { Request, Response } from "express";
import ResponseExpress from "../../../../common/adapters/responseExpressAdapter";
import { GetAllFamiliasTaxonomicasService } from "../../domain/service/getAllFamiliasTaxonomicas.service";

class GetAllFamiliasTaxonomicasController {
  // eslint-disable-next-line consistent-return
  public async getAllFamiliasTaxonomicas(req: Request, res: Response): Promise<any> {
    const responseExpress = new ResponseExpress();
    try {
      const service = new GetAllFamiliasTaxonomicasService();
      const result = await service.getAllFamiliasTaxonomicas();
      return responseExpress.successResponse(res, result[0]);
    } catch (error) {
      return responseExpress.errorResponse(res, error as Error);
    }
  }
}

export default GetAllFamiliasTaxonomicasController;
