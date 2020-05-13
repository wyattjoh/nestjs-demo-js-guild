import { Field, ObjectType, registerEnumType, Int, ID } from '@nestjs/graphql';

export enum RamenNoodle {
  RAMEN = 'RAMEN',
  SPINACH = 'SPINACH',
  BLACK_SQUID_INK = 'BLACK_SQUID_INK',
  SPICY_CHILLI = 'SPICY_CHILLI',
}

// Register the enum type with GraphQL.
registerEnumType(RamenNoodle, { name: 'RamenNoodle' });

@ObjectType()
export class Ramen {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  broth?: string;

  @Field(() => Int)
  price?: number;

  @Field(() => RamenNoodle)
  noodles: RamenNoodle;
}
