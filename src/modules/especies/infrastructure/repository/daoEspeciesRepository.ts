import { RowDataPacket } from "mysql2/promise";
import Server from "../../../main/application/server";
// import { DataBaseName } from '../../../../common/utils/database_enum';
import { Especie } from "../../domain/model/mdl-especie";

export class DaoEspeciesRepository {
  private mySQLReadConnection = Server.getInstance().MySQLReadConnection;
  private mySQLWriteConnection = Server.getInstance().MySQLWriteConnection;

  public async getAllEspecies(): Promise<any> {
    try {
      const connection = await this.mySQLReadConnection.connect();
      const query = "SELECT * FROM especies"; // Consulta para obtener todas las categorías
      const results = (await connection.promise()).query(query);
      connection.end();
      return results;
    } catch (error) {
      const _error = error as Error;
      throw new Error(
        `${_error.message} in ${DaoEspeciesRepository.name} of ${
          this.getAllEspecies.name
        }() method`,
      );
    }
  }

  public async createEspecie(data: Especie): Promise<RowDataPacket> {
    try {
      const connection = await this.mySQLWriteConnection.connect();
      const query = "INSERT INTO especies (familia_id, especie, nombre_comun, altitud_minima, altitud_maxima, estado_conservacion_id) VALUES (?, ?, ?, ?, ?, ?)";
      const result = await connection.execute(
        query,
        [
          data.familiaTaxonomicaId,
          data.especie,
          data.nombreComun,
          data.altitudMinima,
          data.altitudMaxima,
          data.estadoConservacionId,
        ],
      );
      connection.end();
      return result;
    } catch (error) {
      const _error = error as Error;
      throw new Error(
        `${_error.message} in ${DaoEspeciesRepository.name} of ${
          this.createEspecie.name
        }() method`,
      );
    }
  }
}
