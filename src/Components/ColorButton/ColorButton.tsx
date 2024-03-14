import { FC } from "react";
import { StylesColorButton } from "./styles";
import { IColorButton } from "../../Interfaces/Interface";

const ColorButton: FC<IColorButton> = (props) => (
  <StylesColorButton {...props}>{props.children}</StylesColorButton>
);

export default ColorButton;
