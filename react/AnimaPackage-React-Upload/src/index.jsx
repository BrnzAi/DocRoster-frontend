import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Upload } from "./screens/Upload";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Upload />
  </StrictMode>,
);
