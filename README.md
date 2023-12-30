# 🃏 Deck Cards

This project is the core to generate decks of cards and manage a basic logic of use.

## Installation

```
npm i @josemasf/deck-cards
```

## Creating & Using a Deck

Create a basic deck without suits

```
const deck = new Deck(20);
```

Create an advanced deck with several suits. For example a Spanish deck

```
const deck = new Deck(10,4);
```

## Inspect the Deck

We can perform various actions on the deck

### Top

Get the first card on top

```
const first = deck.top();
```

Also we can pick some number of cards in the top

```
const firstFive = deck.top(5);
```

### Shuffle

We can shuffle the deck and randomize the positions, because by default the array go from 1 to max length adding 1 number by position

```
const first = deck.shuffle();
```

### Discard

You have the possibility of discarding a card, we can specify the position to discard or let it be random if we do not provide any

```
const random = deck.discard();

const firstFive = deck.discard(5)
```

### Disable a Card

You can disable the use of a card in the deck. This might be useful in situations where certain cards should not be drawn or used in the game for a period of time.

To disable a card, you need to use the `disableCard` method of the `deck` object. This method requires one argument: the index of the card you want to disable.

For example, if you want to disable the second card in the deck (indices start from 0), you can do so in the following way:

```
deck.disableCard(1);
```

### Get number of card available

```
const deckAvailable = deck.len();
```

### Get number of card used

```
const random = deck.used();
```

### Get suits setted

```
deck.suits;
```

### Get card by suit setted

```
deck.cardsBySuit;
```
