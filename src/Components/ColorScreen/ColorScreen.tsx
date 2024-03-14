import { FC } from "react";
import { StyleColorScreen } from "./styles";
import { IColorScreen } from "../../Interfaces/Interface";

const ColorScreen: FC<IColorScreen> = ({ children, background }) => (
  <StyleColorScreen $background={background}>{children}</StyleColorScreen>
);

export default ColorScreen;
