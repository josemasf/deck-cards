export class Desk {
  constructor(private readonly cards: number) {
    if (this.cards === 0) throw Error("empty desk its not allow");
    if (this.cards < 0) throw Error("desk should have 1 card minimum");
  }

  len(): number {
    const cardsAvailibles = new Array(this.cards);

    return cardsAvailibles.length;
  }
}
