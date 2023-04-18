/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { DaoFamiliasTaxonomicasConnector } from "../../infrastructure/connector/daoFamiliasTaxonomicasConnector";

export class GetAllFamiliasTaxonomicasService {
  public async getAllFamiliasTaxonomicas(): Promise<any> {
    try {
      const daoFamiliasTaxonomicasConnector = new DaoFamiliasTaxonomicasConnector();
      const result = await daoFamiliasTaxonomicasConnector.getAllFamiliasTaxonomicas();
      return result;
    } catch (error) {
      const _error = error as Error;
      return _error;
    }
  }
}
