import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import { Header } from "../todo/components/header";
import '@testing-library/jest-dom/extend-expect';

it("renders with correct title", () => {
  const { getByText, getByTestId } = render(<Header />);

  expect(getByTestId("header")).toBeInTheDocument();
  expect(getByText("Todos")).toBeInTheDocument();
  expect(getByText("New Todo Input")).toBeInTheDocument();

});
