import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./Counter-two";
import user from "@testing-library/user-event";

describe("Counter-Two component", () => {
  test("render correctly", () => {
    render(<CounterTwo />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("handler are called", async () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
