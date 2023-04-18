import { RowDataPacket } from "mysql2";
import { OrdenTaxonomico } from "../../domain/model/mdl-OrdenTaxonomico";
import { DaoOrdenesTaxonomicosRepository } from "../repository/daoOrdenesTaxonomicosRepository";

export class DaoOrdenesTaxonomicosConnector {
  public async getAllOrdenesTaxonomicos(): Promise<any> {
    const daoOrdenesTaxonomicosRepository = new DaoOrdenesTaxonomicosRepository();
    return daoOrdenesTaxonomicosRepository.getAllOrdenesTaxonomicos();
  }

  public async createOrdenTaxonomico(ordenTaxonomico: OrdenTaxonomico): Promise<RowDataPacket> {
    const daoOrdenesTaxonomicosRepository = new DaoOrdenesTaxonomicosRepository();
    return daoOrdenesTaxonomicosRepository.createOrdenTaxonomico(ordenTaxonomico);
  }
}
