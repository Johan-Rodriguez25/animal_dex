/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { DaoClasesTaxonomicasConnector } from "../../infrastructure/connector/daoClasesTaxonomicasConnector";

export class GetAllClasesTaxonomicasService {
  public async getAllClasesTaxonomicas(): Promise<any> {
    try {
      const daoClasesTaxonomicasConnector = new DaoClasesTaxonomicasConnector();
      const result = await daoClasesTaxonomicasConnector.getAllClasesTaxonomicas();
      return result;
    } catch (error) {
      const _error = error as Error;
      return _error;
    }
  }
}
