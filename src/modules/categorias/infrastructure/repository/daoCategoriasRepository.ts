import { RowDataPacket } from "mysql2/promise";
import Server from "../../../main/application/server";
// import { DataBaseName } from '../../../../common/utils/database_enum';
import { Categoria } from "../../domain/model/mdl-categoria";

export class DaoCategoriasRepository {
  private mySQLReadConnection = Server.getInstance().MySQLReadConnection;
  private mySQLWriteConnection = Server.getInstance().MySQLWriteConnection;

  public async getAllCategorias(): Promise<any> {
    try {
      const connection = await this.mySQLReadConnection.connect();
      const query = "SELECT * FROM categorias"; // Consulta para obtener todas las categorías
      const results = (await connection.promise()).query(query);
      connection.end();
      return results;
    } catch (error) {
      const _error = error as Error;
      throw new Error(
        `${_error.message} in ${DaoCategoriasRepository.name} of ${
          this.getAllCategorias.name
        }() method`,
      );
    }
  }

  public async createCategoria(data: Categoria): Promise<RowDataPacket> {
    try {
      const connection = await this.mySQLWriteConnection.connect();
      const query = "INSERT INTO categorias (categoria) VALUES (?)";
      // const [result] = await connection.execute(query, [data.categoria]);
      const result = await connection.execute(query, [data.categoria]);
      connection.end();
      return result;
    } catch (error) {
      const _error = error as Error;
      throw new Error(
        `${_error.message} in ${DaoCategoriasRepository.name} of ${
          this.createCategoria.name
        }() method`,
      );
    }
  }
}
