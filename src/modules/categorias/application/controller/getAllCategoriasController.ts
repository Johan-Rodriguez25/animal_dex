import { Request, Response } from "express";
import ResponseExpress from "../../../../common/adapters/responseExpressAdapter";
import { GetAllCategoriasService } from "../../domain/service/getAllCategorias.service";

class GetAllCategoriasController {
  // eslint-disable-next-line consistent-return
  public async getAllCategorias(req: Request, res: Response): Promise<any> {
    const responseExpress = new ResponseExpress();
    try {
      const service = new GetAllCategoriasService();
      const result = await service.getAllCategorias();
      return responseExpress.successResponse(res, result[0]);
    } catch (error) {
      return responseExpress.errorResponse(res, error as Error);
    }
  }
}

export default GetAllCategoriasController;
