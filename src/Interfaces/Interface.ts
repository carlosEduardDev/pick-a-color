import { ReactNode } from "react";

declare global {
  class EyeDropper {
    open: () => Promise<{ sRGBHex: string }>;
  }
}

export interface IColorButton extends React.ComponentProps<"button"> {}

export interface IButtonProps {
  children: ReactNode;
}

export interface IColorControls {
  children: ReactNode;
}

export interface IInputColor extends React.ComponentProps<"input"> {}

export interface IColorScreen {
  children: React.ReactNode;
  background: string;
}

export interface background {
  $background: string;
}
