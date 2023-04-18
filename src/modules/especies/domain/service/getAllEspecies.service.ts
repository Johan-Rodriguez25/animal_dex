/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { DaoEspeciesConnector } from "../../infrastructure/connector/daoEspeciesConnector";

export class GetAllEspeciesService {
  public async getAllEspecies(): Promise<any> {
    try {
      const daoEspeciesConnector = new DaoEspeciesConnector();
      const result = await daoEspeciesConnector.getAllEspecies();
      return result;
    } catch (error) {
      const _error = error as Error;
      return _error;
    }
  }
}
