import { FC } from "react";
import { StylesColorInput } from "./styles";
import { IInputColor } from "../../Interfaces/Interface";

const ColorInput: FC<IInputColor> = (props) => (
  <StylesColorInput readOnly {...props}></StylesColorInput>
);

export default ColorInput;
