import { RowDataPacket } from "mysql2/promise";
import Server from "../../application/server";
// import { DataBaseName } from '../../../../common/utils/database_enum';

export class DaoAppMainRepository {
  private mySQLReadConnection = Server.getInstance().MySQLReadConnection;

  public async setShutdownAPI(data: any): Promise<RowDataPacket> {
    try {
      const connection = await this.mySQLReadConnection.connect();
      const query = "INSERT INTO log_shutdown SET ?";
      const [result] = await connection.execute(query, { ...data });
      connection.end();
      return result;
    } catch (error) {
      const _error = error as Error;
      throw new Error(
        `${_error.message} in ${DaoAppMainRepository.name} of ${
          this.setShutdownAPI.name
        }() method`,
      );
    }
  }
}
