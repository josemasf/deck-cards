import { Deck } from "../src/Deck";

describe("Deck", () => {
  it("can be instantiated without throwing errors", () => {
    const randomCodelyberInstantiator = () => {
      new Deck(1);
    };

    expect(randomCodelyberInstantiator).not.toThrow(TypeError);
  });

  it("can generate a deck with 20 card", () => {
    const deck = new Deck(20);

    expect(deck.len()).toEqual(20);
  });

  it("can generate a deck with 40 card", () => {
    const deck = new Deck(40);

    expect(deck.len()).toEqual(40);
  });

  it("can generate a deck with 60 card", () => {
    const deck = new Deck(60);

    expect(deck.len()).toEqual(60);
  });

  it("cant generate a deck with 0 card", () => {
    const randomDeckInstantiator = () => {
      new Deck(0);
    };

    expect(randomDeckInstantiator).toThrow("empty deck its not allow");
    expect(randomDeckInstantiator).toThrow(Error);
  });

  it("cant generate a deck with negative number of card", () => {
    const randomDeckInstantiator = () => {
      new Deck(-1);
    };

    expect(randomDeckInstantiator).toThrow("deck should have 1 card minimum");
    expect(randomDeckInstantiator).toThrow(Error);
  });

  it("draw random card", () => {
    const deck = new Deck(1);

    expect(deck.drawCard()).toEqual(1);
  });

  it("should not repeat a card", () => {
    const deck = new Deck(1);

    expect(deck.drawCard()).toEqual(1);
    expect(deck.drawCard()).toEqual(-1);
  });

  it("should be accesible number of cards used", () => {
    const deck = new Deck(10);

    deck.drawCard();
    deck.drawCard();
    deck.drawCard();

    expect(deck.cardsUsed()).toEqual(3);
  });

  it("should be accesible cards used and availibles", () => {
    const deck = new Deck(10);

    deck.drawCard();
    deck.drawCard();
    deck.drawCard();

    expect(deck.CARDSUSED).toHaveLength(3);
    expect(deck.CARDSAVAILIBLES).toHaveLength(7);
  });

  it("should accept suits", () => {
    const deck = new Deck(10, 4);

    expect(deck.len()).toEqual(40);
  });
});
