import { Deck } from "./Deck";

export class DeckBuilder {
  cards = 1;
  cardsBySuit = 1;
  suits = 1;

  setCardsBySuit(cards: number) {
    if (cards < 0) throw Error("deck should have 1 card minimum");
    if (cards === 0) throw Error("empty deck its not allow");

    this.cards = cards;
    this.cardsBySuit = cards;

    return this;
  }

  setSuits(suits: number) {
    this.cards = this.cards * suits;
    this.suits = suits;
    return this;
  }

  build() {
    return new Deck(this.cardsBySuit, this.suits);
  }
}
