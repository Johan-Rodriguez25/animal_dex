import { Request, Response } from "express";
import { firstValueFrom } from "rxjs";
import ResponseExpress from "../../../../common/adapters/responseExpressAdapter";
import { CreateCategoriaService } from "../../domain/service/createCategoria.service";
import { SingleQueueAdapter } from "../../../../common/adapters/singleQueueAdapter";

class CreateCategoriaController {
  // eslint-disable-next-line consistent-return
  public async createCategoria(req: Request, res: Response) {
    const responseExpress = new ResponseExpress();
    try {
      const { body } = req;
      const singleQueueAdapter = SingleQueueAdapter.getInstance();
      const service = new CreateCategoriaService();
      singleQueueAdapter.execute(service.createCategoria(body));
      const result = await firstValueFrom(singleQueueAdapter.resultWorker);
      return responseExpress.successResponse(res, result);
    } catch (error) {
      return responseExpress.errorResponse(res, error as Error);
    }
  }
}

export default CreateCategoriaController;
