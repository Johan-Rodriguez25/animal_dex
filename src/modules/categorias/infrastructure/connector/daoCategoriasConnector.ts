import { RowDataPacket } from "mysql2";
import { Categoria } from "../../domain/model/mdl-categoria";
import { DaoCategoriasRepository } from "../repository/daoCategoriasRepository";

export class DaoCategoriasConnector {
  public async getAllCategorias(): Promise<any> {
    const daoCategoriasRepository = new DaoCategoriasRepository();
    return daoCategoriasRepository.getAllCategorias();
  }

  public async createCategoria(categoria: Categoria): Promise<RowDataPacket> {
    const daoCategoriasRepository = new DaoCategoriasRepository();
    return daoCategoriasRepository.createCategoria(categoria);
  }
}
