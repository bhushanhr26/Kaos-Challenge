import React from "react";
import * as FormStyles from "../lib/FormStyles";

export default function AccountForm() {
  const [inp, setInp] = React.useState("");
  const [code, setCode] = React.useState("");
  const [pop, setPop] = React.useState(true);

  return (
    <div style={{ margin: "15px" }}>
      <div>
        <label style={FormStyles.MakeForm().label}>Name</label>
        <div>
          <input
            style={FormStyles.MakeForm().inp1}
            type="text"
            placeholder="Enter your Name"
            value={inp}
            onChange={(e) => {
              setInp(e.target.value);
            }}
          />
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <div>
          <label style={FormStyles.MakeForm().label}>IFSC Codes</label>
        </div>
        <div style={FormStyles.MakeForm().div}>
          {!pop ? (
            <div>
              <input
                style={FormStyles.MakeForm().inp2}
                type="text"
                placeholder="Enter your Name"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </div>
          ) : (
            ""
          )}
          <div style={{ marginLeft: "5px" }}>
            <button
              style={FormStyles.MakeForm().x}
              onClick={() => {
                setPop(false);
              }}
            >
              x
            </button>
          </div>
        </div>
      </div>
      {!pop ? (
        <div>
          <button
            style={FormStyles.MakeForm().addIfsc}
            onClick={() => {
              setPop(true);
            }}
          >
            <span>Add IFSC</span>
          </button>
        </div>
      ) : (
        ""
      )}
      <div>
        <button style={FormStyles.MakeForm().submitbtn} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
