import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Header } from "../todo/components/header";
import '@testing-library/jest-dom/extend-expect';

it("renders with correct title", () => {
  const { getByText } = render(<Header />);

  expect(getByText("Todos")).toBeInTheDocument();
  expect(getByText("New Todo Input")).toBeInTheDocument();

});
