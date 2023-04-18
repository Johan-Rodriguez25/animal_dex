import { Request, Response } from "express";
import { firstValueFrom } from "rxjs";
import ResponseExpress from "../../../../common/adapters/responseExpressAdapter";
import { SingleQueueAdapter } from "../../../../common/adapters/singleQueueAdapter";
import { CreateFamiliaTaxonomicaService } from "../../domain/service/createFamiliaTaxonomica.service";

class CreateFamiliasTaxonomicasController {
  // eslint-disable-next-line consistent-return
  public async createFamiliaTaxonomica(req: Request, res: Response) {
    const responseExpress = new ResponseExpress();
    try {
      const { body } = req;
      const singleQueueAdapter = SingleQueueAdapter.getInstance();
      const service = new CreateFamiliaTaxonomicaService();
      singleQueueAdapter.execute(service.createFamiliaTaxonomica(body));
      const result = await firstValueFrom(singleQueueAdapter.resultWorker);
      return responseExpress.successResponse(res, result);
    } catch (error) {
      return responseExpress.errorResponse(res, error as Error);
    }
  }
}

export default CreateFamiliasTaxonomicasController;
