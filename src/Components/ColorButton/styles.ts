import styled from "styled-components";

export const StylesColorButton = styled.button`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid var(--primary-color);
  background-color: transparent;
  &:hover {
    scale: 1.03;
  }
  &:disabled {
    filter: brightness(30%);
    pointer-events: none;
  }
  p {
    color: var(--primary-color);
    font-size: 1.3rem;
  }
  img {
    width: 20px;
    margin-top: 5px;
  }
`;
