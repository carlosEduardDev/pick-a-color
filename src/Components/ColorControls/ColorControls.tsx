import { FC } from "react";
import { StylesColorConstrols } from "./styles";
import { IColorControls } from "../../Interfaces/Interface";

const ColorControls: FC<IColorControls> = ({ children }) => (
  <StylesColorConstrols>{children}</StylesColorConstrols>
);

export default ColorControls;
