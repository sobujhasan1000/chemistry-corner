import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ChooseUs from "./ChooseUs";

describe("ChooseUs Component", () => {
  it("render ChooseUs Component", () => {
    render(<ChooseUs />);
    expect(screen.getByText("Smart Matching")).toBeInTheDocument();
  });
});
