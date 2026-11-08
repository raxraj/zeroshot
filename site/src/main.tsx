import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import "./styles.css";

const root = document.getElementById("root")!;
try {
  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </StrictMode>
  );
} catch (e: any) {
  root.innerHTML = '<div style="padding:40px;color:#ff4444;font-size:20px;white-space:pre-wrap;">RENDER ERROR: ' + (e?.message || e) + '\n' + (e?.stack || '') + '</div>';
}