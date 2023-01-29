import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./Index";

describe("Todo tests", () => {
  let button, input;

  beforeEach(() => {
    render(<Todo />);

    button = screen.getByText("Add");
    input = screen.getByLabelText("text");
  });

  test("first three default items should be rendered.", () => {
    const items = screen.getAllByText(/item/i);
    expect(items.length).toEqual(3);
  });

  test("The input and button should be in document.", () => {
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("The text typed in input should be in document.", () => {
    //type something
    const name = "Soner";
    userEvent.type(input, name);

    //click the button
    userEvent.click(button);

    //assertion
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
