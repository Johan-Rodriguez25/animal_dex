/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { DaoOrdenesTaxonomicosConnector } from "../../infrastructure/connector/daoOrdenesTaxonomicosConnector";

export class GetAllOrdenesTaxonomicosService {
  public async getAllOrdenesTaxonomicos(): Promise<any> {
    try {
      const daoOrdenesTaxonomicosConnector = new DaoOrdenesTaxonomicosConnector();
      const result = await daoOrdenesTaxonomicosConnector.getAllOrdenesTaxonomicos();
      return result;
    } catch (error) {
      const _error = error as Error;
      return _error;
    }
  }
}
