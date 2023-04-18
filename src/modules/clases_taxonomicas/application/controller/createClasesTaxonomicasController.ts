import { Request, Response } from "express";
import { firstValueFrom } from "rxjs";
import ResponseExpress from "../../../../common/adapters/responseExpressAdapter";
import { SingleQueueAdapter } from "../../../../common/adapters/singleQueueAdapter";
import { CreateClaseTaxonomicaService } from "../../domain/service/createClaseTaxonomica.service";

class CreateClasesTaxonomicasController {
  // eslint-disable-next-line consistent-return
  public async createClaseTaxonomica(req: Request, res: Response) {
    const responseExpress = new ResponseExpress();
    try {
      const { body } = req;
      const singleQueueAdapter = SingleQueueAdapter.getInstance();
      const service = new CreateClaseTaxonomicaService();
      singleQueueAdapter.execute(service.createClaseTaxonomica(body));
      const result = await firstValueFrom(singleQueueAdapter.resultWorker);
      return responseExpress.successResponse(res, result);
    } catch (error) {
      return responseExpress.errorResponse(res, error as Error);
    }
  }
}

export default CreateClasesTaxonomicasController;
