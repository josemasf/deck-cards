import { Deck } from "../src/";

describe("Deck", () => {
  it("can be instantiated without throwing errors", () => {
    const randomDeckInstantiator = () => {
      new Deck(1);
    };

    expect(randomDeckInstantiator).not.toThrow(TypeError);
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

  it("discard random card", () => {
    const deck = new Deck(1);

    expect(deck.discard()).toEqual(1);
  });

  it("discard some position card", () => {
    const deck = new Deck(40);

    expect(deck.discard(2)).toEqual(3);
  });

  it("should not repeat a card", () => {
    const deck = new Deck(1);

    expect(deck.discard()).toEqual(1);
    expect(deck.discard()).toEqual(-1);
  });

  it("should be accesible number of cards used", () => {
    const deck = new Deck(10);

    deck.discard();
    deck.discard();
    deck.discard();

    expect(deck.used()).toEqual(3);
  });

  it("should be accesible cards used and availibles", () => {
    const deck = new Deck(10);

    deck.discard();
    deck.discard();
    deck.discard();

    expect(deck.usedCards).toHaveLength(3);
    expect(deck.cardsAvailibles).toHaveLength(7);
  });

  it("should accept suits", () => {
    const deck = new Deck(10, 4);

    expect(deck.len()).toEqual(40);
  });

  it("should shuffle deck", () => {
    const deck = new Deck(10, 1);

    expect(deck.cardsAvailibles).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    deck.shuffle();

    expect(deck.cardsAvailibles).not.toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  it("should return the first card on top", () => {
    const deck = new Deck(10, 1);

    const first = deck.top();

    expect(first).toStrictEqual([1]);
  });

  it("should return the first 3 card on top", () => {
    const deck = new Deck(10, 1);

    const firstThree = deck.top(3);

    expect(firstThree).toStrictEqual([1, 2, 3]);
  });

  it("should throw error on negative positions", () => {
    const randomDeckInstantiator = () => {
      const deck = new Deck(10, 1);
      deck.top(-3);
    };

    expect(randomDeckInstantiator).toThrow("positions top cant be negative");
    expect(randomDeckInstantiator).toThrow(Error);
  });

  it("should throw error on positions lenght 0", () => {
    const randomDeckInstantiator = () => {
      const deck = new Deck(10, 1);
      deck.top(0);
    };

    expect(randomDeckInstantiator).toThrow("positions top lenght cant be 0");
    expect(randomDeckInstantiator).toThrow(Error);
  });
});
