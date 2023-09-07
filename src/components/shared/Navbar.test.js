import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  it("renders without crashing", () => {
    render(<Navbar />);
    expect(screen.getByAltText("Website Logo")).toBeInTheDocument();
  });

  it("toggles the user menu when user image is clicked", () => {
    render(<Navbar />);
    const userImage = screen.getByAltText("User Image");

    fireEvent.click(userImage);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();

    fireEvent.click(userImage);
    expect(screen.queryByText("Dashboard")).toBeNull();
  });

  // Add more test cases as needed for your component
});
