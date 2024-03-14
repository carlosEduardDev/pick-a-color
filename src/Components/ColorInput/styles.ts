import styled from "styled-components";

export const StylesColorInput = styled.input`
  appearance: none;
  border-radius: 0.5rem;
  background-color: transparent;
  padding-left: 0.5rem;
  position: relative;
  cursor: pointer;
  color: var(--primary-color);
  &:disabled {
    filter: brightness(30%);
    pointer-events: none;
  }
  &::after {
    content: "RGB";
    text-align: end;
    padding: 2px 5px;
    color: black;
    width: 60px;
    border-radius: 15px;
    height: 25px;
    background-color: var(--primary-color);
    display: block;
  }
  &::before {
    content: "";
    width: 24px;
    position: absolute;
    border-radius: 15px;
    height: 24px;
    top: 0.5px;
    left: 9px;
    background-color: var(--bg-color);
    display: block;
  }
  &.active::after {
    content: "HEX";
    text-align: start;
  }
  &.active::before {
    left: 43px;
  }
`;
