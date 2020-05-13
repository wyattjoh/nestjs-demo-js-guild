import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private visits = new Map<string, number>();

  getGreetings() {
    const greetings = [];
    for (const [name, count] of this.visits.entries()) {
      greetings.push({ name, count });
    }
    return greetings;
  }

  getHello(name = 'World'): string {
    let count = this.visits.get(name) || 0;
    count++;
    this.visits.set(name, count);

    let msg = `Hello ${name}!`;

    switch (count) {
      case 1:
        msg += ' This is your first time visiting!';
        break;
      default:
        msg += ` We've seen you ${count} times!`;
        break;
    }

    return msg;
  }
}
