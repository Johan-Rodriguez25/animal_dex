/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { DaoOrdenesTaxonomicosConnector } from "../../infrastructure/connector/daoOrdenesTaxonomicosConnector";
// import { AddZerosFill } from "../../app/functions/addZerosHexNumber";
import { OrdenTaxonomico } from "../model/mdl-OrdenTaxonomico";

export class CreateOrdenTaxonomicoService {
  public async createOrdenTaxonomico(ordenTaxonomico: OrdenTaxonomico): Promise<OrdenTaxonomico | null | Error> {
    try {
      const daoOrdenesTaxonomicosConnector = new DaoOrdenesTaxonomicosConnector();
      const insertOrdenTaxonomico = await daoOrdenesTaxonomicosConnector.createOrdenTaxonomico(ordenTaxonomico);
      return insertOrdenTaxonomico.value;
    } catch (error) {
      const _error = error as Error;
      return _error;
    }
  }
}
