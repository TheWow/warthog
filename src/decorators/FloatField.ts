import { Field, Float } from 'type-graphql';
import { Column } from 'typeorm';

import { getMetadataStorage } from '../metadata';
import { composeMethodDecorators, MethodDecoratorFactory } from '../utils';
import { defaultColumnType } from '../torm';

interface FloatFieldOptions {
  nullable?: boolean;
}

export function FloatField(args: FloatFieldOptions = {}): any {
  const nullableOption = args.nullable === true ? { nullable: true } : {};
  const databaseConnection: string = process.env.WARTHOG_DB_CONNECTION || '';
  const type = defaultColumnType(databaseConnection, 'float');

  const registerWithWarthog = (target: object, propertyKey: string): any => {
    getMetadataStorage().addField('float', target.constructor.name, propertyKey);
  };

  // These are the 2 required decorators to get type-graphql and typeorm working
  const factories = [
    registerWithWarthog,
    Field(() => Float, {
      ...nullableOption
    }),
    Column({
      // This type will be different per database driver
      type,
      ...nullableOption
    }) as MethodDecoratorFactory
  ];

  return composeMethodDecorators(...factories);
}
