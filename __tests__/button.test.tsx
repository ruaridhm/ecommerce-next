import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../src/components/Button/Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("renders children", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies the primary variant by default", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass(
      "bg-indigo-400 border-indigo-400"
    );
  });

  it("applies the specified variant", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} variant="warning">
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toHaveClass(
      "bg-amber-400 border-amber-400"
    );
  });

  it("applies the outlined style when outlined prop is true", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} outlined>
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toHaveClass(
      "bg-transparent text-amber-400 font-semibold"
    );
  });

  it("applies the specified size", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} size="small">
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toHaveClass("h-8 px-3 text-sm");
  });

  it("disables the button when disabled prop is true", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("shows loading spinner when loading prop is true", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} loading>
        Click me
      </Button>
    );
    expect(screen.getByText("Click me")).toHaveClass("text-transparent");
    expect(screen.getByRole("button").querySelector("svg")).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
