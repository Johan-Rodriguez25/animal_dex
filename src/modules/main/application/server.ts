// Libraries
import express, { Application } from "express";
import compression from "compression";
import cors from "cors";
import dotenvFlow from "dotenv-flow";
import morgan from "morgan";
import helmet from "helmet";
import { firstValueFrom } from "rxjs";

// Dependencies
import MySQLReadConnection from "../../../common/config/configMySQLReadConnection";
import MySQLWriteConnection from "../../../common/config/configMySQLWriteConnection";
import { ParalellQueueAdapter } from "../../../common/adapters/paralellQueueAdapter";

// Routes
import CategoriasRoutes from "../../categorias/infrastructure/http/apiCategorias.routes";
import ClasesTaxonomicasRoutes from "../../clases_taxonomicas/infrastructure/http/apiClasesTaxonomicas.routes";
import OrdenesTaxonomicosRoutes from "../../ordenes_taxonomicos/infrastructure/http/apiOrdenesTaxonomicos.routes";
import FamiliasTaxonomicasRoutes from "../../familias_taxonomicas/infrastructure/http/apiFamiliasTaxonomios.router";
import EspeciesRoutes from "../../especies/infrastructure/http/apiEspecies.router";

// Configurations
dotenvFlow.config({
  silent: true,
});

class Server {
  private port: number;
  public static instance: Server;
  public app: Application;
  public MySQLReadConnection!: MySQLReadConnection;
  public MySQLWriteConnection!: MySQLWriteConnection;
  private apiPath = {
    categorias: "/categorias/api/v1",
    clasesTaxonomicas: "/clases/api/v1",
    ordenesTaxonomicas: "/ordenes/api/v1",
    familiasTaxonomicas: "/familias/api/v1",
    especies: "/especies/api/v1",
  };

  private constructor() {
    this.app = express();
    this.port = Number(process.env.PORT) || 3001;
    this.init();
  }

  public static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server();
    }

    return Server.instance;
  }

  private async init(): Promise<void> {
    try {
      this.MySQLReadConnection = MySQLReadConnection.getInstance();
      this.MySQLWriteConnection = MySQLWriteConnection.getInstance();
      this.listenStatusConnection();
    } catch (error) {
      console.log(error);
    }
  }

  private async listenStatusConnection() {
    try {
      const mySQLconnections: Promise<any>[] = [];
      mySQLconnections.push(this.MySQLReadConnection.statusConnection.toPromise());
      mySQLconnections.push(this.MySQLWriteConnection.statusConnection.toPromise());
      const paralellQueueAdapter = new ParalellQueueAdapter(mySQLconnections, 20, 20000);
      paralellQueueAdapter.execute();
      await firstValueFrom(paralellQueueAdapter.statusFinishTasks);
      this.middlewares();
      this.routes();
      this.listen();
    } catch (error) {
      throw new Error("DB connection error");
    }
  }

  private middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(morgan("dev"));
    this.app.use(helmet());
    this.app.use(compression({ level: 9 }));
  }

  private routes(): void {
    this.app.use(this.apiPath.categorias, CategoriasRoutes);
    this.app.use(this.apiPath.clasesTaxonomicas, ClasesTaxonomicasRoutes);
    this.app.use(this.apiPath.ordenesTaxonomicas, OrdenesTaxonomicosRoutes);
    this.app.use(this.apiPath.familiasTaxonomicas, FamiliasTaxonomicasRoutes);
    this.app.use(this.apiPath.especies, EspeciesRoutes);

    // Check if it's alive
    this.app.get("/", (req, res) => res.status(200).json({ ok: true }));
  }

  private listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on ${this.port}`);
    });
  }
}

export default Server;
