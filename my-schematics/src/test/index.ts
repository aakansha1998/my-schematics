import { Schema } from './schema';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function test(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const name = _options.name;
    console.log(name);
    tree.create('test.ts' ,'Demo' + ' ' + name);
    return tree;
  };
}
