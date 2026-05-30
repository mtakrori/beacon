import { type SchemaTypeDefinition } from 'sanity';
import { product } from './schemas/product';
import { project } from './schemas/project';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, project],
};
