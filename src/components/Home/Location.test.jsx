import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Location from "./Location";


describe("ChooseUs Component", () => {
  it("render ChooseUs Component", () => {
    render(<Location></Location>);
    expect(screen.getByText("Meet Singles in Your Area")).toBeInTheDocument();
  });
});