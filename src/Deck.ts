export class Deck {
  cardsAvailibles: number[] = new Array(0);
  usedCards: number[] = [];
  disabledCards: number[] = [];
  cardsBySuit = 1;
  suits = 1;

  /**
   * Represents a deck of cards.
   * @param cards The number of cards in the deck.
   * @param _suits The number of suits in the deck. Default value is 1.
   * @throws Error if the deck is empty or has less than 1 card.
   */
  constructor(
    private readonly cards: number,
    private readonly _suits: number = 1,
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

  /**
   * Returns the number of cards available in the deck.
   *
   * @returns The number of cards available in the deck.
   */
  len(): number {
    return this.cardsAvailibles.length;
  }

  /**
   * Discards a card from the deck.
   *
   * @param position The position of the card to discard. If not provided, a random card will be discarded.
   * @returns The discarded card, or -1 if the card was not found in the deck.
   */
  discard(position = -1): number {
    let positionToDelete: number = Math.floor(Math.random() * this.len());

    if (position > -1) positionToDelete = position as number;

    const card = this.cardsAvailibles[positionToDelete];

    this.usedCards.push(card);

    const indexUsed = this.cardsAvailibles.findIndex(
      (cardInDeck) => cardInDeck == card,
    );

    if (indexUsed > -1) {
      this.cardsAvailibles.splice(positionToDelete, 1);
    } else {
      return -1;
    }
    return card;
  }

  /**
   * Disables a card in the deck.
   * @param {number} card - The card to be disabled.
   * @throws {Error} If the card is not found in the deck.
   */
  disableCard(card: number): void {
    const indexUsed = this.cardsAvailibles.findIndex(
      (cardInDeck) => cardInDeck == card,
    );

    if (indexUsed > -1) {
      this.cardsAvailibles.splice(indexUsed, 1);
      this.disabledCards.push(card);
    } else {
      throw Error("card not found");
    }
  }

  /**
   * Returns the number of used cards in the deck.
   *
   * @returns The number of used cards.
   */
  used(): number {
    return this.usedCards.length;
  }

  /**
   * Shuffles the deck by randomizing the order of available cards.
   */
  shuffle(): void {
    this.cardsAvailibles = this.randomizeOrder(this.cardsAvailibles);
  }

  /**
   * Returns the top cards from the deck.
   * @param positions The number of cards to return from the top of the deck.
   * @returns An array of cards from the top of the deck.
   * @throws Error if positions is negative or zero.
   */
  top(positions = 1) {
    if (positions < 0) throw Error("positions top cant be negative");
    if (positions === 0) throw Error("positions top lenght cant be 0");

    return this.cardsAvailibles.slice(0, positions);
  }

  private randomizeOrder = ([...arr]) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  };
}
