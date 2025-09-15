import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StyledEngineProvider, GlobalStyles } from "@mui/material";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles
        styles={"@layer theme, base, mui, components, utilities;"}
      />
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);
