import { Desk } from "../src/Desk";

describe("Desk", () => {
  it("can be instantiated without throwing errors", () => {
    const randomCodelyberInstantiator = () => {
      new Desk(1);
    };

    expect(randomCodelyberInstantiator).not.toThrow(TypeError);
  });

  it("can generate a desk with 20 card", () => {
    const desk = new Desk(20);

    expect(desk.len()).toEqual(20);
  });

  it("can generate a desk with 40 card", () => {
    const desk = new Desk(40);

    expect(desk.len()).toEqual(40);
  });

  it("can generate a desk with 60 card", () => {
    const desk = new Desk(60);

    expect(desk.len()).toEqual(60);
  });

  it("cant generate a desk with 0 card", () => {
    const randomDeskInstantiator = () => {
      new Desk(0);
    };

    expect(randomDeskInstantiator).toThrow("empty desk its not allow");
    expect(randomDeskInstantiator).toThrow(Error);
  });

  it("cant generate a desk with negative number of card", () => {
    const randomDeskInstantiator = () => {
      new Desk(-1);
    };

    expect(randomDeskInstantiator).toThrow("desk should have 1 card minimum");
    expect(randomDeskInstantiator).toThrow(Error);
  });
});
