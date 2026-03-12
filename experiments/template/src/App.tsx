import React from "react";
// UI layer — the import below is replaced by setup.sh
// project-zero uses:  import { ... } from "zero-shot"
// project-mui  uses:  import { ... } from "@mui/material"
// PLACEHOLDER_UI_IMPORT is substituted automatically.
import type {} from "PLACEHOLDER_UI_IMPORT"; // type-only placeholder — keeps TS happy
import { formatDate } from "./utils/formatDate";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>Experiment Template App</h1>
      <p>Today: {formatDate(new Date().toISOString().slice(0, 10))}</p>
    </div>
  );
}
