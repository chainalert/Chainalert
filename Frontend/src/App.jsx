import "../src/input.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/custom.css";
import Main from "./main";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
