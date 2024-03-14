import styled from "styled-components";
import { background } from "../../Interfaces/Interface";

export const StyleColorScreen = styled.div<background>`
  background-color: ${({ $background }) => $background};
  width: 16rem;
  height: 16rem;
  border: 2px solid var(--primary-color);
  border-radius: 1rem;
  display: grid;
  place-content: center;
  h1 {
    color: var(--primary-color);
    padding: 0.2rem 0.5rem;
    border-radius: 3px;
    font-size: 1.3rem;
    background-color: rgba(9, 2, 2, 0.478);
  }
`;
