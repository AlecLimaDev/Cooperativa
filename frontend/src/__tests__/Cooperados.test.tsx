/*  @vitest-environment jsdom
 */
import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Cooperados from "../pages/Cooperados";
import { BrowserRouter } from "react-router-dom";

it("the title is visible", () => {
  render(
    <BrowserRouter>
      <Cooperados />
    </BrowserRouter>
  );
  const text = screen.getByText("Adicionar Cooperado 👉")
  expect(text).toBeInTheDocument();
});


