import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../Components/Login";
import "@testing-library/jest-dom";

describe("student register form unit testing", () => {
  test("on initial render, Login page", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    screen.debug();
  });

  test("form password type should be a password", () => {
    const { getByPlaceholderText } = render(
      <Router>
        <Login />
      </Router>
    );
    const nameLabel = getByPlaceholderText("Enter IT number");
    const ageLabel = getByPlaceholderText("Enter Password");
    expect(nameLabel).toBeInTheDocument();
    expect(ageLabel).toBeInTheDocument();
    const input = getByPlaceholderText("Enter Password");
    expect(input).toHaveAttribute("type", "password");
  });

  test("email input field should accept email", () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const ITno = screen.getByPlaceholderText("Enter IT number");
    userEvent.type(ITno, "IT20124526");
    expect(ITno.value).toMatch("IT20124526");
  });

  test("render the login form from with 1 buttons", async () => {
    render(
      <Router>
        <Login />
      </Router>
    );
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });
});
