/*  @vitest-environment jsdom
 */
import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Favoritos from "../pages/Favoritos";

it("the title to have visible", function () {
  render(
    <BrowserRouter>
      <Favoritos />
    </BrowserRouter>
  );

  const text = screen.getByText("Contatos favoritos");
  expect(text).toBeInTheDocument();


});
