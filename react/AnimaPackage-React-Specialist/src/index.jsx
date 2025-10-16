import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Specialist } from "./screens/Specialist";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Specialist />
  </StrictMode>,
);
