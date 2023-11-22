import styled from "styled-components";
import Input from "./Input";

export const InputSearch = styled(Input)`
  width: 100%;
  text-align: center;
  position: fixed;
  top: 100px;
  z-index: 200;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 1em;
  background-color: transparent;
  color: var(--color-title);
  font-weight: 700;

  &:focus {
    outline: none;
  }

  &:placeholder {
    font-family: "Montserrat", sans-serif;
    color: #aaa;
  }
`;
