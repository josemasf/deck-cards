export class Deck {
  cardsAvailibles: number[] = new Array(0);
  usedCards: number[] = [];
  cardsBySuit = 1;
  suits = 1;

  constructor(
    private readonly cards: number,
    private readonly _suits: number = 1
  ) {
    if (this.cards === 0) throw Error("empty deck its not allow");
    if (this.cards < 0) throw Error("deck should have 1 card minimum");

    if (this.cards > 0) {
      this.cardsAvailibles = new Array(this.cards * this._suits);

      this.suits = this._suits;
      this.cardsBySuit = this.cards;

      for (let i = 0; i < this.cardsAvailibles.length; i++) {
        this.cardsAvailibles[i] = i + 1;
      }
    }
  }

  len(): number {
    return this.cardsAvailibles.length;
  }

  discard(position: number | undefined = undefined): number {
    let positionToDelete: number = Math.floor(Math.random() * this.len());

    if (position) positionToDelete = position;

    const card = this.cardsAvailibles[positionToDelete];

    this.usedCards.push(card);

    const indexUsed = this.cardsAvailibles.findIndex(
      (cardInDeck) => cardInDeck == card
    );

    if (indexUsed > -1) {
      this.cardsAvailibles.splice(indexUsed, 1);
    } else {
      return -1;
    }
    return card;
  }

  used(): number {
    return this.usedCards.length;
  }

  private randomizeOrder = ([...arr]) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  };

  shuffle(): void {
    this.cardsAvailibles = this.randomizeOrder(this.cardsAvailibles);
  }

  top(positions = 1) {
    if (positions < 0) throw Error("positions top cant be negative");
    if (positions === 0) throw Error("positions top lenght cant be 0");

    return this.cardsAvailibles.slice(0, positions);
  }
}
