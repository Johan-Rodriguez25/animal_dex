/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { DaoEspeciesConnector } from "../../infrastructure/connector/daoEspeciesConnector";
// import { AddZerosFill } from "../../app/functions/addZerosHexNumber";
import { Especie } from "../model/mdl-especie";

export class CreateEspecieService {
  public async createEspecie(especie: Especie): Promise<Especie | null | Error> {
    try {
      const daoEspeciesConnector = new DaoEspeciesConnector();
      const insertEspecie = await daoEspeciesConnector.createEspecie(especie);
      return insertEspecie.value;
    } catch (error) {
      const _error = error as Error;
      return _error;
    }
  }
}
