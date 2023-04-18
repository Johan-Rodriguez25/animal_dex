import { Request, Response } from "express";
import { firstValueFrom } from "rxjs";
import ResponseExpress from "../../../../common/adapters/responseExpressAdapter";
import { SingleQueueAdapter } from "../../../../common/adapters/singleQueueAdapter";
import { CreateOrdenTaxonomicoService } from "../../domain/service/createOrdenTaxonomico.service";

class CreateOrdenesTaxonomicosController {
  // eslint-disable-next-line consistent-return
  public async createOrdenTaxonomico(req: Request, res: Response) {
    const responseExpress = new ResponseExpress();
    try {
      const { body } = req;
      const singleQueueAdapter = SingleQueueAdapter.getInstance();
      const service = new CreateOrdenTaxonomicoService();
      singleQueueAdapter.execute(service.createOrdenTaxonomico(body));
      const result = await firstValueFrom(singleQueueAdapter.resultWorker);
      return responseExpress.successResponse(res, result);
    } catch (error) {
      return responseExpress.errorResponse(res, error as Error);
    }
  }
}

export default CreateOrdenesTaxonomicosController;
