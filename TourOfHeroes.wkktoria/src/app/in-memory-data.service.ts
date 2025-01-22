import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const heroes = [
      { id: 1, name: 'Batman' },
      { id: 2, name: 'Spider-Man' },
      { id: 3, name: 'Superman' },
      { id: 4, name: 'Wolverine' },
      { id: 5, name: 'Iron Man' },
      { id: 6, name: 'Captain America' },
      { id: 7, name: 'Black Widow' },
      { id: 8, name: 'Thor' },
      { id: 9, name: 'Wonder Woman' },
      { id: 10, name: 'Green Lantern' },
    ];

    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 0;
  }
}
