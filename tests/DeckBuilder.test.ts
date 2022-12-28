import { DeckBuilder } from "../src/";

describe("Deck Builder", () => {
  it("should build a deck without setter", () => {
    const deck = new DeckBuilder().build();

    expect(deck.len()).toEqual(1);
  });

  it("should build a deck setting card by suits", () => {
    const deck = new DeckBuilder().setCardsBySuit(1).build();

    expect(deck.len()).toEqual(1);
  });

  it("should build a deck setting card by suits and suit", () => {
    const deck = new DeckBuilder().setCardsBySuit(1).setSuits(4).build();

    expect(deck.len()).toEqual(4);
  });

  it("should build a deck of 40 card with 10 cards with 4 suits", () => {
    const deck = new DeckBuilder().setCardsBySuit(10).setSuits(4).build();

    expect(deck.len()).toEqual(40);
  });

  it("should be accesible number of cards by suit", () => {
    const deck = new DeckBuilder().setCardsBySuit(10).setSuits(2).build();

    expect(deck.cardsBySuit).toEqual(10);
  });

  it("should be accesible number of suits", () => {
    const deck = new DeckBuilder().setCardsBySuit(10).setSuits(2).build();

    expect(deck.suits).toEqual(2);
  });

  describe("Error control", () => {
    it("should throw error with negative cards by suit", () => {
      const randomDeckBuilderInstantiator = () => {
        new DeckBuilder().setCardsBySuit(-10).build();
      };

      expect(randomDeckBuilderInstantiator).toThrow(
        "deck should have 1 card minimum"
      );
      expect(randomDeckBuilderInstantiator).toThrow(Error);
    });

    it("should throw error with 0 cards by suit", () => {
      const randomDeckBuilderInstantiator = () => {
        new DeckBuilder().setCardsBySuit(0).build();
      };

      expect(randomDeckBuilderInstantiator).toThrow("empty deck its not allow");
      expect(randomDeckBuilderInstantiator).toThrow(Error);
    });
  });
});
