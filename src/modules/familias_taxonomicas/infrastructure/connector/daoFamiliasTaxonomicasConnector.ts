import { RowDataPacket } from "mysql2";
import { FamiliaTaxonomica } from "../../domain/model/mdl-FamiliaTaxonomica";
import { DaoFamiliasTaxonomicasRepository } from "../repository/daoFamiliasTaxonomicasRepository";

export class DaoFamiliasTaxonomicasConnector {
  public async getAllFamiliasTaxonomicas(): Promise<any> {
    const daoFamiliasTaxonomicasRepository = new DaoFamiliasTaxonomicasRepository();
    return daoFamiliasTaxonomicasRepository.getAllFamiliasTaxonomicas();
  }

  public async createFamiliaTaxonomica(familiaTaxonomica: FamiliaTaxonomica):
  Promise<RowDataPacket> {
    const daoFamiliasTaxonomicasRepository = new DaoFamiliasTaxonomicasRepository();
    return daoFamiliasTaxonomicasRepository.createFamiliaTaxonomica(familiaTaxonomica);
  }
}
