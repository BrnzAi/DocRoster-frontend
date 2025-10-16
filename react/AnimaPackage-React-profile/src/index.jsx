import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Profile } from "./screens/Profile";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Profile />
  </StrictMode>,
);
