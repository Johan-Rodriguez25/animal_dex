import { JSONSchemaType } from "ajv";
import { Categoria } from "./mdl-categoria";

export const CategoriaSchema: JSONSchemaType<Categoria> = {
  $schema: "http://json-schema.org/draft-07/schema#",
  additionalProperties: false,
  properties: {
    categoria: {
      type: "string",
    },
  },
  required: ["categoria"],
  type: "object",
};
