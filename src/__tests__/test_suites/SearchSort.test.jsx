import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../../components/Search";
import Sort from "../../components/Sort";

describe("Search and Sort Components", () => {
  describe("Search Component", () => {
    test("renders the search input with correct placeholder", () => {
      render(<Search setSearch={vi.fn()} />);
      const input = screen.getByPlaceholderText(/Search your Recent Transactions/i);
      expect(input).toBeInTheDocument();
    });

    test("calls setSearch with the correct value on change", () => {
      const mockSetSearch = vi.fn();
      render(<Search setSearch={mockSetSearch} />);
      
      const input = screen.getByPlaceholderText(/Search your Recent Transactions/i);
      fireEvent.change(input, { target: { value: "test search" } });

      expect(mockSetSearch).toHaveBeenCalledWith("test search");
    });
  });

  describe("Sort Component", () => {
    test("renders the sort select with correct options", () => {
      render(<Sort onSort={vi.fn()} />);
      const select = screen.getByRole("combobox");
      
      expect(select).toBeInTheDocument();
      expect(screen.getByText("Description")).toBeInTheDocument();
      expect(screen.getByText("Category")).toBeInTheDocument();
    });

    test("calls onSort with the correct value when selection changes", () => {
      const mockOnSort = vi.fn();
      render(<Sort onSort={mockOnSort} />);
      
      const select = screen.getByRole("combobox");
      fireEvent.change(select, { target: { value: "category" } });

      expect(mockOnSort).toHaveBeenCalledWith("category");
    });
  });
});