import { RowDataPacket } from "mysql2/promise";
import Server from "../../../main/application/server";
// import { DataBaseName } from '../../../../common/utils/database_enum';
import { OrdenTaxonomico } from "../../domain/model/mdl-OrdenTaxonomico";

export class DaoOrdenesTaxonomicosRepository {
  private mySQLReadConnection = Server.getInstance().MySQLReadConnection;
  private mySQLWriteConnection = Server.getInstance().MySQLWriteConnection;

  public async getAllOrdenesTaxonomicos(): Promise<any> {
    try {
      const connection = await this.mySQLReadConnection.connect();
      const query = "SELECT * FROM ordenes"; // Consulta para obtener todas las categorías
      const results = (await connection.promise()).query(query);
      connection.end();
      return results;
    } catch (error) {
      const _error = error as Error;
      throw new Error(
        `${_error.message} in ${DaoOrdenesTaxonomicosRepository.name} of ${
          this.getAllOrdenesTaxonomicos.name
        }() method`,
      );
    }
  }

  public async createOrdenTaxonomico(data: OrdenTaxonomico): Promise<RowDataPacket> {
    try {
      const connection = await this.mySQLWriteConnection.connect();
      const query = "INSERT INTO ordenes (clase_id, orden) VALUES (?, ?)";
      const result = await connection.execute(
        query,
        [data.claseTaxonomicaId, data.ordenTaxonomico],
      );
      connection.end();
      return result;
    } catch (error) {
      const _error = error as Error;
      throw new Error(
        `${_error.message} in ${DaoOrdenesTaxonomicosRepository.name} of ${
          this.createOrdenTaxonomico.name
        }() method`,
      );
    }
  }
}
