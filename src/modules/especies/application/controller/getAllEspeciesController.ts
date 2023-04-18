import { Request, Response } from "express";
import ResponseExpress from "../../../../common/adapters/responseExpressAdapter";
import { GetAllEspeciesService } from "../../domain/service/getAllEspecies.service";

class GetAllEspeciesController {
  // eslint-disable-next-line consistent-return
  public async getAllEspecies(req: Request, res: Response): Promise<any> {
    const responseExpress = new ResponseExpress();
    try {
      const service = new GetAllEspeciesService();
      const result = await service.getAllEspecies();
      return responseExpress.successResponse(res, result[0]);
    } catch (error) {
      return responseExpress.errorResponse(res, error as Error);
    }
  }
}

export default GetAllEspeciesController;
