import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import TopicRegisterForm from "../Components/Student/TopicRegisterForm";
import "@testing-library/jest-dom";

describe("topic register form unit testing", () => {
  test("on initial render, Login page", () => {
    render(
      <Router>
        <TopicRegisterForm />
      </Router>
    );
    screen.debug();
  });

  test("group id input field should accept only valid group id", () => {
    render(
      <Router>
        <TopicRegisterForm />
      </Router>
    );
    const groupId = screen.getByPlaceholderText("Enter Group ID");
    userEvent.type(groupId, "REG_Y4_89");
    expect(groupId.value).toMatch("REG_Y4_89");
  });

  test("render the login form from with 1 buttons", async () => {
    render(
      <Router>
        <TopicRegisterForm />
      </Router>
    );
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });
});
