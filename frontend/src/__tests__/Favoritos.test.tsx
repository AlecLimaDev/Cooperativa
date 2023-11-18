/*  @vitest-environment jsdom
 */
import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Favoritos from "../pages/Favoritos";

it("the title is visible", () => {
  render(
    <BrowserRouter>
      <Favoritos />
    </BrowserRouter>
  );
  const text = screen.getByText("Contatos Favoritos")
  expect(text).toBeInTheDocument();
});

