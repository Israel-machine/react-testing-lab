import { render, screen, fireEvent } from "@testing-library/react";
import AddTransactionForm from "../../components/AddTransactionForm";

describe("AddTransactionForm Component", () => {
    test("renders all input fields and the submit button", () => {
        render(<AddTransactionForm postTransaction={vi.fn()} />);

        expect(screen.getByPlaceholderText(/Description/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Category/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Amount/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Add Transaction/i })).toBeInTheDocument();
    });

    test("calls postTransaction with the correct data when form is submitted", () => {
        const mockPostTransaction = vi.fn();
        render(<AddTransactionForm postTransaction={mockPostTransaction} />);

        const form = screen.getByRole("button", { name: /Add Transaction/i }).closest("form");

        fireEvent.submit(form, {
            target: {
                date: { value: "2024-01-01" },
                description: { value: "Lunch" },
                category: { value: "Food" },
                amount: { value: "15.50" }
            }
        });

        expect(mockPostTransaction).toHaveBeenCalledWith({
            date: "2024-01-01",
            description: "Lunch",
            category: "Food",
            amount: "15.50"
        });
    });

});