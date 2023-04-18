/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { DaoClasesTaxonomicasConnector } from "../../infrastructure/connector/daoClasesTaxonomicasConnector";
// import { AddZerosFill } from "../../app/functions/addZerosHexNumber";
import { ClaseTaxonomica } from "../model/mdl-ClaseTaxonomica";

export class CreateClaseTaxonomicaService {
  public async createClaseTaxonomica(claseTaxonomica: ClaseTaxonomica): Promise<ClaseTaxonomica | null | Error> {
    try {
      const daoClasesTaxonomicasConnector = new DaoClasesTaxonomicasConnector();
      const insertClaseTaxonomica = await daoClasesTaxonomicasConnector.createClaseTaxonomica(claseTaxonomica);
      return insertClaseTaxonomica.value;
    } catch (error) {
      const _error = error as Error;
      return _error;
    }
  }
}
