import { Injectable } from '@nestjs/common';
import { Ramen, RamenNoodle } from './models/ramen.model';

@Injectable()
export class RamenService {
  private readonly ramen: Ramen[] = [
    {
      id: 'tonkotsu',
      name: 'Tonkotsu Ramen',
      broth: 'Pork Broth',
      noodles: RamenNoodle.RAMEN,
      price: 500,
    },
  ];

  async findOne(id: string) {
    return this.ramen.find(ramen => ramen.id === id);
  }
}
