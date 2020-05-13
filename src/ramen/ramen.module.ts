import { Module } from '@nestjs/common';

import { RamenResolver } from './ramen.resolver';
import { RamenService } from './ramen.service';

@Module({
  providers: [RamenService, RamenResolver],
})
export class RamenModule {}
