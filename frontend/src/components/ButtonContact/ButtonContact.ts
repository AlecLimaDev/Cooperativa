import "./Button"

import styled from "styled-components"
import Button from "./Button"

export const ButtonContact = styled(Button)`
background-color: #993399;
  border-radius: 20%;
  padding: 10px;
  color: white;

  &:hover {
    background-color: #642764;
    cursor: pointer;
  }
`