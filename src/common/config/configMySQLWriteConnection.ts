import mysql from "mysql2";
import { Subject, Observable } from "rxjs";

// Dependencies
import dotenvFlow from "dotenv-flow";

// Configurations
dotenvFlow.config({
  silent: true,
});

class MySQLWriteConnection {
  public static instance: MySQLWriteConnection;
  public connection!: mysql.Connection;
  private _statusConnection = new Subject<boolean>();
  public statusConnection: Observable<boolean>;
  public status: boolean = false;
  private dbConfig: string;

  constructor() {
    this.statusConnection = this._statusConnection.asObservable();
    this.dbConfig = process.env.MYSQL_URL || "";
    this.init();
  }

  public static getInstance(): MySQLWriteConnection {
    if (!MySQLWriteConnection.instance) {
      MySQLWriteConnection.instance = new MySQLWriteConnection();
    }

    return MySQLWriteConnection.instance;
  }

  private async init(): Promise<void> {
    await this.connect();
  }

  public async connect(): Promise<mysql.Connection> {
    try {
      this.connection = mysql.createConnection(this.dbConfig);

      this.connection.connect((error) => {
        if (error) {
          this.setErrorConnection(error);
          this.status = false;
          throw new Error(error.message);
        } else {
          console.log("MySQL write database connected");
          this.setCompleteConnection();
          this.status = true;
        }
      });

      return this.connection;
    } catch (error: any) {
      this.setErrorConnection(error);
      this.status = false;
      throw new Error(error.message);
    }
  }

  private setCompleteConnection(): void {
    this._statusConnection.complete();
  }

  private setErrorConnection(error: any): void {
    this._statusConnection.error(error);
  }

  public convertObjectId(id: string): string {
    return id;
  }
}

export default MySQLWriteConnection;
