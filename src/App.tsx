import { useState, MouseEvent } from "react";
import "./App.css";
import ColorScreen from "./Components/ColorScreen/ColorScreen";
import ColorControls from "./Components/ColorControls/ColorControls";
import ColorInput from "./Components/ColorInput/ColorInput";
import ColorButton from "./Components/ColorButton/ColorButton";
import { eye, message } from "./Services/EyeDropper";
import copyIcon from "./Assets/copy.svg";
import HexToRgb from "./Services/HexToRgb";

const App = () => {
  const [currentColor, setCurrentColor] = useState("");
  const [patternColor, setPatternColor] = useState<"rgb" | "hex">("hex");
  const [disabled, setDisabled] = useState(true);
  const [copyNotification, setCopyNotification] = useState(false);

  const handleOpenEye = async () => {
    const result = await eye.open();
    setCurrentColor(result.sRGBHex);
    setDisabled(false);
  };

  const handleClipboard = () => {
    setDisabled(true);
    navigator.clipboard.writeText(
      patternColor == "hex" ? currentColor : HexToRgb(currentColor)
    );
    setCopyNotification(true);
    setTimeout(() => {
      setCopyNotification(false);
      setDisabled(false);
    }, 1000);
  };

  const handleChangePatternColor = (event: MouseEvent<HTMLInputElement>) => {
    patternColor === "rgb" ? setPatternColor("hex") : setPatternColor("rgb");
    event.currentTarget.classList.toggle("active");
  };

  return (
    <main>
      {message && (
        <p
          style={{
            fontSize: "20px",
            color: "var(--primary-color)",
            textAlign: "center",
          }}
        >
          {message}
        </p>
      )}
      {eye && (
        <>
          <ColorScreen background={currentColor}>
            <h1>
              {currentColor && patternColor === "hex"
                ? currentColor
                : currentColor && patternColor === "rgb"
                ? HexToRgb(currentColor)
                : "Pick a color!"}
            </h1>
          </ColorScreen>
          <ColorControls>
            <ColorInput
              disabled={disabled}
              title="mudar padrão de cor"
              type="checkbox"
              onClick={handleChangePatternColor}
            />
            <ColorButton title="abrir seletor" onClick={handleOpenEye}>
              <p>+</p>
            </ColorButton>
            <ColorButton
              title="copiar cor"
              disabled={disabled}
              onClick={handleClipboard}
            >
              <img src={copyIcon} alt="copy" />
            </ColorButton>
            {copyNotification && (
              <span>{`Cor ${
                patternColor == "hex" ? currentColor : HexToRgb(currentColor)
              } copiada!`}</span>
            )}
          </ColorControls>
        </>
      )}
    </main>
  );
};

export default App;
