import { render, screen } from "@testing-library/react";
import TransactionsList from "../../components/TransactionsList";



describe("TransactionsList Component", () => {
    const mockTransactions = [
        { id: 1, date: "2024-01-01", description: "Rent", category: "Housing", amount: 1200 },
        { id: 2, date: "2024-01-02", description: "Food", category: "Entertainment", amount: 50 },
    ];

    test("renders the correct table headers", () => {
        render(<TransactionsList transactions={[]} />);

        expect(screen.getByText(/Date/i)).toBeInTheDocument();
        expect(screen.getByText(/Description/i)).toBeInTheDocument();
        expect(screen.getByText(/Category/i)).toBeInTheDocument();
        expect(screen.getByText(/Amount/i)).toBeInTheDocument();
        expect(screen.getByText(/DELETE/i)).toBeInTheDocument();
    });

    test("renders transaction data correctly within the list", () => {
        render(<TransactionsList transactions={mockTransactions} />);

        expect(screen.getByText("Rent")).toBeInTheDocument();
        expect(screen.getByText("Food")).toBeInTheDocument();
    });


});