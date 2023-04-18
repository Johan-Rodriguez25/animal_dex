/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
import { DaoCategoriasConnector } from "../../infrastructure/connector/daoCategoriasConnector";
import { Categoria } from "../model/mdl-categoria";
import { SchemaValidatorAdapter } from "../../../../common/adapters/schemaValidatorAdapter";
import { CategoriaSchema } from "../model/schemaCategoria";

export class CreateCategoriaService {
  public async createCategoria(categoria: Categoria): Promise<Categoria | null | Error> {
    try {
      const schemaValidatorAdapter = new SchemaValidatorAdapter();
      schemaValidatorAdapter.compileSchema(CategoriaSchema);
      schemaValidatorAdapter.verifySchema(categoria);
      const daoCategoriasConnector = new DaoCategoriasConnector();
      const insertCategoria = await daoCategoriasConnector.createCategoria(categoria);
      return insertCategoria.value;
    } catch (error) {
      const _error = error as Error;
      return _error;
    }
  }
}
