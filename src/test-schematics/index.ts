import { Rule, SchematicContext, Tree, url, apply, template, move } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

const Joi = require('@hapi/joi');

// Compilation Validation
interface Options {
  name: string;
  styleExtension: string;
}

// Runtime Validation
const optionsScheme = Joi.object().keys({
  name: Joi.string().trim().required(),
  styleExtension: Joi.string().required(),
});

export function testSchematics(options: Options): Rule {
  return (_: Tree, context: SchematicContext) => {
    const status = Joi.validate(options, optionsScheme);

    if (status.error) {
      // context.logger.fatal(
      //   JSON.stringify(status.error.details, null, 4)
      // );
      throw status.error;
    }

    const source = url('./files');
    const rules = [
      template({
        ...strings,
        ...options
      }),
      move('./dist')
    ];

    return apply(source, rules)(context);
  };
}
