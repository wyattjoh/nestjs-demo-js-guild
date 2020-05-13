import { Query, Resolver, Args, ID } from '@nestjs/graphql';
import { Ramen } from './models/ramen.model';
import { RamenService } from './ramen.service';

@Resolver(() => Ramen)
export class RamenResolver {
  constructor(private readonly ramenService: RamenService) {}

  @Query(() => Ramen, { nullable: true })
  async ramen(@Args('id', { type: () => ID }) id: string) {
    return this.ramenService.findOne(id);
  }
}
