/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { DaoFamiliasTaxonomicasConnector } from "../../infrastructure/connector/daoFamiliasTaxonomicasConnector";
// import { AddZerosFill } from "../../app/functions/addZerosHexNumber";
import { FamiliaTaxonomica } from "../model/mdl-FamiliaTaxonomica";

export class CreateFamiliaTaxonomicaService {
  public async createFamiliaTaxonomica(familiaTaxonomica: FamiliaTaxonomica): Promise<FamiliaTaxonomica | null | Error> {
    try {
      const daoFamiliasTaxonomicasConnector = new DaoFamiliasTaxonomicasConnector();
      const insertFamiliaTaxonomica = await daoFamiliasTaxonomicasConnector.createFamiliaTaxonomica(familiaTaxonomica);
      return insertFamiliaTaxonomica.value;
    } catch (error) {
      const _error = error as Error;
      return _error;
    }
  }
}
