import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Reg } from "./screens/Reg";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Reg />
  </StrictMode>,
);
