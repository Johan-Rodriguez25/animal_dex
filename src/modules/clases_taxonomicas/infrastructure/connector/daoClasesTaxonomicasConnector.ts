import { RowDataPacket } from "mysql2";
import { ClaseTaxonomica } from "../../domain/model/mdl-ClaseTaxonomica";
import { DaoClasesTaxonomicasRepository } from "../repository/daoClasesTaxonomicasRepository";

export class DaoClasesTaxonomicasConnector {
  public async getAllClasesTaxonomicas(): Promise<any> {
    const daoClasesTaxonomicasRepository = new DaoClasesTaxonomicasRepository();
    return daoClasesTaxonomicasRepository.getAllClasesTaxonomicas();
  }

  public async createClaseTaxonomica(claseTaxonomica: ClaseTaxonomica): Promise<RowDataPacket> {
    const daoClasesTaxonomicasRepository = new DaoClasesTaxonomicasRepository();
    return daoClasesTaxonomicasRepository.createClaseTaxonomica(claseTaxonomica);
  }
}
