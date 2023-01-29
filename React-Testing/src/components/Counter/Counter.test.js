import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Index";

describe("Counter-Test", () => {
  let count, increaseBtn, decreaseBtn;
  beforeEach(() => {
    console.log("Her testen önce!");
    render(<Counter />);
    count = screen.getByText("0");
    increaseBtn = screen.getByText("Artır");
    decreaseBtn = screen.getByText("Azalt");
  });
  beforeAll(() => {
    console.log("En ilk bir defa!");
  });
  afterEach(() => {
    console.log("Her testen sonra!");
  });
  afterAll(() => {
    console.log("En son bir defa!");
  });

  test("artır", () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });
  test("azalt", () => {
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
