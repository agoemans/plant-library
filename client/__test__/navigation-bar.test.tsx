import React from "react";
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from "@testing-library/react";
import NavigationBar from "../src/pages/navigation-bar";

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe("Should draw the navigation bar", () => {
    test("it has all the li items", async () => {
        render(<NavigationBar />);
        expect(screen.getByText(/Home/)).toBeInTheDocument();
        expect(screen.getByText(/Calendar/)).toBeInTheDocument();
        expect(screen.getByText(/Companions/)).toBeInTheDocument();
        expect(screen.getByText(/Rotation/)).toBeInTheDocument();
    });

    test("all nav items are clickable", async () => {
        render(<NavigationBar />);
        fireEvent.click(screen.getByText(/Home/));
        fireEvent.click(screen.getByText(/Calendar/));
        fireEvent.click(screen.getByText(/Companions/));
        fireEvent.click(screen.getByText(/Rotation/));
        expect(mockHistoryPush).toHaveBeenCalledTimes(4);
    });
});