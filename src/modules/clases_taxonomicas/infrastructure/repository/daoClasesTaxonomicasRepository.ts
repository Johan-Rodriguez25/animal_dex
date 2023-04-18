import { RowDataPacket } from "mysql2/promise";
import Server from "../../../main/application/server";
// import { DataBaseName } from '../../../../common/utils/database_enum';
import { ClaseTaxonomica } from "../../domain/model/mdl-ClaseTaxonomica";

export class DaoClasesTaxonomicasRepository {
  private mySQLReadConnection = Server.getInstance().MySQLReadConnection;
  private mySQLWriteConnection = Server.getInstance().MySQLWriteConnection;

  public async getAllClasesTaxonomicas(): Promise<any> {
    try {
      const connection = await this.mySQLReadConnection.connect();
      const query = "SELECT * FROM clases"; // Consulta para obtener todas las categorías
      const results = (await connection.promise()).query(query);
      connection.end();
      return results;
    } catch (error) {
      const _error = error as Error;
      throw new Error(
        `${_error.message} in ${DaoClasesTaxonomicasRepository.name} of ${
          this.getAllClasesTaxonomicas.name
        }() method`,
      );
    }
  }

  public async createClaseTaxonomica(data: ClaseTaxonomica): Promise<RowDataPacket> {
    try {
      const connection = await this.mySQLWriteConnection.connect();
      const query = "INSERT INTO clases (categoria_id, clase) VALUES (?, ?)";
      const result = await connection.execute(query, [data.categoriaId, data.claseTaxonomica]);
      connection.end();
      return result;
    } catch (error) {
      const _error = error as Error;
      throw new Error(
        `${_error.message} in ${DaoClasesTaxonomicasRepository.name} of ${
          this.createClaseTaxonomica.name
        }() method`,
      );
    }
  }
}
