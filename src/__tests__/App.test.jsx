import { render, screen } from "@testing-library/react";
import App from '../components/App';

vi.mock("../components/AccountContainer", () => ({
  default: () => <div data-testid="account-container-mock">Account Container</div>,
}));

describe("App Component", () => {
  test("renders the main header with the correct text", () => {
    render(<App />);
    const header = screen.getByRole("heading", { level: 2 });
    expect(header).toHaveTextContent(/The Royal Bank of Flatiron/i);
  });

  test("renders the AccountContainer child component", () => {
    render(<App />);
    const container = screen.getByTestId("account-container-mock");
    expect(container).toBeInTheDocument();
  });


});