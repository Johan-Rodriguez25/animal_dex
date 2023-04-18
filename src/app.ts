import cluster from "cluster";
import dotenvFlow from "dotenv-flow";
import * as os from "os";
import * as process from "process";
import Server from "./modules/main/application/server";

dotenvFlow.config({
  silent: true,
});

let workers = os.cpus().length;

if (cluster.isPrimary) {
  if (process.env.ENV === "local") {
    workers = 1;
  }

  console.log(`Number of CPUs is ${workers}`);
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < workers; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });
} else {
  Server.getInstance();
}
