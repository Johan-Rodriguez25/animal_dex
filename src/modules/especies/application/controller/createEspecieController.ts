import { Request, Response } from "express";
import { firstValueFrom } from "rxjs";
import ResponseExpress from "../../../../common/adapters/responseExpressAdapter";
import { SingleQueueAdapter } from "../../../../common/adapters/singleQueueAdapter";
import { CreateEspecieService } from "../../domain/service/createEspecie.service";

class CreateEspeciecontroller {
  // eslint-disable-next-line consistent-return
  public async createEspecie(req: Request, res: Response) {
    const responseExpress = new ResponseExpress();
    try {
      const { body } = req;
      const singleQueueAdapter = SingleQueueAdapter.getInstance();
      const service = new CreateEspecieService();
      singleQueueAdapter.execute(service.createEspecie(body));
      const result = await firstValueFrom(singleQueueAdapter.resultWorker);
      return responseExpress.successResponse(res, result);
    } catch (error) {
      return responseExpress.errorResponse(res, error as Error);
    }
  }
}

export default CreateEspeciecontroller;
