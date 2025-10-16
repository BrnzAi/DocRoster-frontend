import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Recover } from "./screens/Recover";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Recover />
  </StrictMode>,
);
