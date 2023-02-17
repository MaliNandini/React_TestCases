import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills Component", () => {
  const skills = ["HTML", "CSS", "JAVASCRIPT"];
  test(" Skills renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a skills of list", () => {
    render(<Skills skills={skills} />);
    const listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const buttonElement = screen.getByRole("button", {
      name: "Login",
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test("start learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningbutton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningbutton).not.toBeInTheDocument();
  });

  test("Start Learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
