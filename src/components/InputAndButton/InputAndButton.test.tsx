import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import InputAndButton from "./InputAndButton";
describe("InputAndButton component", () => {
  const mockOnButtonPress = jest.fn();

  beforeEach(() => {
    mockOnButtonPress.mockClear();
  });

  it("calls onButtonPress when the button is clicked", async () => {
    render(<InputAndButton onButtonPress={mockOnButtonPress} />);

    const buttonElement = screen.getByText("Search");
    await userEvent.click(buttonElement);

    expect(mockOnButtonPress).toHaveBeenCalledTimes(1);
  });

  it("calls onButtonPress when the Enter key is pressed in the input", async () => {
    render(<InputAndButton onButtonPress={mockOnButtonPress} />);

    const inputElement = screen.getByPlaceholderText("Search for images");
    await userEvent.type(inputElement, "test search{enter}");

    expect(mockOnButtonPress).toHaveBeenCalledTimes(1);
  });
});
