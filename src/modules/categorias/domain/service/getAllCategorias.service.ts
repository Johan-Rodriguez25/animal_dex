/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { DaoCategoriasConnector } from "../../infrastructure/connector/daoCategoriasConnector";

export class GetAllCategoriasService {
  public async getAllCategorias(): Promise<any> {
    try {
      const daoCategoriasConnector = new DaoCategoriasConnector();
      const result = await daoCategoriasConnector.getAllCategorias();
      return result;
    } catch (error) {
      const _error = error as Error;
      return _error;
    }
  }
}
