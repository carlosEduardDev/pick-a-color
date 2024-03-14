import styled from "styled-components";

export const StylesColorConstrols = styled.div`
  display: flex;
  /* position: relative; */
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  span {
    position: absolute;
    left: 50%;
    bottom: 8rem;
    transform: translateX(-50%);
    /* top: 100px; */
    color: var(--primary-color);
    animation: fade 1s linear forwards;
  }
  @keyframes fade {
    100% {
      bottom: 10rem;
      opacity: 0;
    }
  }
`;
