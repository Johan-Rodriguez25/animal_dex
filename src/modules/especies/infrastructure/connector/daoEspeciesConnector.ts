import { RowDataPacket } from "mysql2";
import { Especie } from "../../domain/model/mdl-especie";
import { DaoEspeciesRepository } from "../repository/daoEspeciesRepository";

export class DaoEspeciesConnector {
  public async getAllEspecies(): Promise<any> {
    const daoEspeciesRepository = new DaoEspeciesRepository();
    return daoEspeciesRepository.getAllEspecies();
  }

  public async createEspecie(especie: Especie):
  Promise<RowDataPacket> {
    const daoEspeciesRepository = new DaoEspeciesRepository();
    return daoEspeciesRepository.createEspecie(especie);
  }
}
