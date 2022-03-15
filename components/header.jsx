import React from "react";
import * as FormStyles from "../lib/FormStyles";

export default function Header() {
  return (
    <div style={{ margin: "10px" }}>
      <h1 style={FormStyles.MakeHeader().h1}>KAOS Challenge</h1>
      <h3 style={FormStyles.MakeHeader().h2}>Frontend Developer</h3>
    </div>
  );
}
