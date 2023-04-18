import { RowDataPacket } from "mysql2/promise";
import Server from "../../../main/application/server";
// import { DataBaseName } from '../../../../common/utils/database_enum';
import { FamiliaTaxonomica } from "../../domain/model/mdl-FamiliaTaxonomica";

export class DaoFamiliasTaxonomicasRepository {
  private mySQLReadConnection = Server.getInstance().MySQLReadConnection;
  private mySQLWriteConnection = Server.getInstance().MySQLWriteConnection;

  public async getAllFamiliasTaxonomicas(): Promise<any> {
    try {
      const connection = await this.mySQLReadConnection.connect();
      const query = "SELECT * FROM familias"; // Consulta para obtener todas las categorías
      const results = (await connection.promise()).query(query);
      connection.end();
      return results;
    } catch (error) {
      const _error = error as Error;
      throw new Error(
        `${_error.message} in ${DaoFamiliasTaxonomicasRepository.name} of ${
          this.getAllFamiliasTaxonomicas.name
        }() method`,
      );
    }
  }

  public async createFamiliaTaxonomica(data: FamiliaTaxonomica): Promise<RowDataPacket> {
    try {
      const connection = await this.mySQLWriteConnection.connect();
      const query = "INSERT INTO familias (orden_id, familia) VALUES (?, ?)";
      const result = await connection.execute(
        query,
        [data.ordenTaxonomicoId, data.familiaTaxonomica],
      );
      connection.end();
      return result;
    } catch (error) {
      const _error = error as Error;
      throw new Error(
        `${_error.message} in ${DaoFamiliasTaxonomicasRepository.name} of ${
          this.createFamiliaTaxonomica.name
        }() method`,
      );
    }
  }
}
