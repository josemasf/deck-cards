export class Deck {
  CARDSAVAILIBLES: number[] = new Array(0);
  CARDSUSED: number[] = [];

  constructor(
    private readonly cards: number,
    private readonly suits: number = 1
  ) {
    if (this.cards === 0) throw Error("empty deck its not allow");
    if (this.cards < 0) throw Error("deck should have 1 card minimum");

    if (this.cards > 0) {
      this.CARDSAVAILIBLES = new Array(this.cards * this.suits);

      for (let i = 0; i < this.CARDSAVAILIBLES.length; i++) {
        this.CARDSAVAILIBLES[i] = i + 1;
      }
    }
  }

  len(): number {
    return this.CARDSAVAILIBLES.length;
  }

  drawCard(): number {
    const card = this.CARDSAVAILIBLES[Math.floor(Math.random() * this.len())];

    this.CARDSUSED.push(card);

    const indexUsed = this.CARDSAVAILIBLES.findIndex(
      (cardInDeck) => cardInDeck == card
    );

    if (indexUsed > -1) {
      this.CARDSAVAILIBLES.splice(indexUsed, 1);
    } else {
      return -1;
    }
    return card;
  }

  cardsUsed(): number {
    return this.CARDSUSED.length;
  }
}
