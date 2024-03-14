let eye: EyeDropper;
let message: string;

"EyeDropper" in window
  ? (eye = new EyeDropper())
  : (message =
      "Infelizmente a API javascript 'EyeDropper' não funciona no seu navegador ...");

export { eye, message };
