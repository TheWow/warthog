// This file has been auto-generated by Warthog.  Do not update directly as it
// will be re-written.  If you need to change this file, update models or add
// new TypeGraphQL objects
import { GraphQLID as ID } from "graphql";
import {
  ArgsType,
  Field as TypeGraphQLField,
  Float,
  InputType as TypeGraphQLInputType,
  Int
} from "type-graphql";
import { registerEnumType } from "type-graphql";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { GraphQLJSONObject } = require("graphql-type-json");

import { BaseWhereInput, PaginationArgs } from "../../../src";
// @ts-ignore
import { User } from "../src/user.model";

export enum UserOrderByEnum {
  firstName_ASC = "firstName_ASC",
  firstName_DESC = "firstName_DESC",

  lastName_ASC = "lastName_ASC",
  lastName_DESC = "lastName_DESC",

  email_ASC = "email_ASC",
  email_DESC = "email_DESC",

  age_ASC = "age_ASC",
  age_DESC = "age_DESC",

  isRequired_ASC = "isRequired_ASC",
  isRequired_DESC = "isRequired_DESC",

  rating_ASC = "rating_ASC",
  rating_DESC = "rating_DESC"
}

registerEnumType(UserOrderByEnum, {
  name: "UserOrderByInput"
});

@TypeGraphQLInputType()
export class UserWhereInput extends BaseWhereInput {
  @TypeGraphQLField({ nullable: true })
  firstName_eq?: string;

  @TypeGraphQLField({ nullable: true })
  firstName_contains?: string;

  @TypeGraphQLField({ nullable: true })
  firstName_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  firstName_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  firstName_in?: string[];

  @TypeGraphQLField({ nullable: true })
  lastName_eq?: string;

  @TypeGraphQLField({ nullable: true })
  lastName_contains?: string;

  @TypeGraphQLField({ nullable: true })
  lastName_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  lastName_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  lastName_in?: string[];

  @TypeGraphQLField({ nullable: true })
  email_eq?: string;

  @TypeGraphQLField({ nullable: true })
  email_contains?: string;

  @TypeGraphQLField({ nullable: true })
  email_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  email_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  email_in?: string[];

  @TypeGraphQLField({ nullable: true })
  age_eq?: number;

  @TypeGraphQLField({ nullable: true })
  age_gt?: number;

  @TypeGraphQLField({ nullable: true })
  age_gte?: number;

  @TypeGraphQLField({ nullable: true })
  age_lt?: number;

  @TypeGraphQLField({ nullable: true })
  age_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  age_in?: number[];

  @TypeGraphQLField(() => Boolean, { nullable: true })
  isRequired_eq?: Boolean;

  @TypeGraphQLField(() => [Boolean], { nullable: true })
  isRequired_in?: Boolean[];

  @TypeGraphQLField({ nullable: true })
  rating_eq?: number;

  @TypeGraphQLField({ nullable: true })
  rating_gt?: number;

  @TypeGraphQLField({ nullable: true })
  rating_gte?: number;

  @TypeGraphQLField({ nullable: true })
  rating_lt?: number;

  @TypeGraphQLField({ nullable: true })
  rating_lte?: number;

  @TypeGraphQLField(() => [Float], { nullable: true })
  rating_in?: number[];
}

@TypeGraphQLInputType()
export class UserWhereUniqueInput {}

@TypeGraphQLInputType()
export class UserCreateInput {
  @TypeGraphQLField()
  firstName!: string;

  @TypeGraphQLField({ nullable: true })
  lastName?: string;

  @TypeGraphQLField()
  email!: string;

  @TypeGraphQLField()
  age!: number;

  @TypeGraphQLField()
  isRequired!: boolean;

  @TypeGraphQLField()
  rating!: number;
}

@TypeGraphQLInputType()
export class UserUpdateInput {
  @TypeGraphQLField({ nullable: true })
  firstName?: string;

  @TypeGraphQLField({ nullable: true })
  lastName?: string;

  @TypeGraphQLField({ nullable: true })
  email?: string;

  @TypeGraphQLField({ nullable: true })
  age?: number;

  @TypeGraphQLField({ nullable: true })
  isRequired?: boolean;

  @TypeGraphQLField({ nullable: true })
  rating?: number;
}

@ArgsType()
export class UserWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput;

  @TypeGraphQLField(() => UserOrderByEnum, { nullable: true })
  orderBy?: UserOrderByEnum;
}

@ArgsType()
export class UserCreateManyArgs {
  @TypeGraphQLField(() => [UserCreateInput])
  data!: UserCreateInput[];
}

@ArgsType()
export class UserUpdateArgs {
  @TypeGraphQLField() data!: UserUpdateInput;
  @TypeGraphQLField() where!: UserWhereUniqueInput;
}
