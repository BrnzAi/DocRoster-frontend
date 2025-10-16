import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Review } from "./screens/Review";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Review />
  </StrictMode>,
);
