import React from "react";
import * as FormStyles from "../lib/FormStyles";

export default function () {
  const data = [
    { City: "City One", Temp: "24", weather: "Clear Skies" },
    { City: "City Two", Temp: "31", weather: "Sunny" },
    { City: "City Three", Temp: "-3", weather: "Very Cold" }
  ];
  return (
    <div style={{ margin: "10px" }}>
      <div style={{ display: "flex", alignItems: "flexStart" }}>
        <div style={FormStyles.MakeFeed().div1}>
          <div style={FormStyles.MakeFeed().div2}>
            <div>
              <span>JD</span>
            </div>
          </div>
        </div>
        <div>
          {data.map((x) => {
            return (
              <div style={FormStyles.MakeFeed().card}>
                <div
                  style={{
                    display: "flex",
                    margin: "10px",
                    alignItems: "center"
                  }}
                >
                  <div>
                    <span style={{ fontWeight: "900" }}>{x.City}</span>
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <span style={{ fontWeight: "900", fontSize: "xx-large" }}>
                      {x.Temp}
                    </span>
                  </div>
                </div>

                <div style={{ margin: "5px" }}>
                  <span style={{ fontWeight: "100" }}>{x.weather}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ margin: "5px" }}>
        <div style={{ display: "flex", alignItems: "flexStart" }}>
          <div style={FormStyles.MakeFeed().div1}>
            <div style={FormStyles.MakeFeed().div2}>
              <div>
                <span>DJ</span>
              </div>
            </div>
          </div>
          <div>
            {data.map((x) => {
              return (
                <div style={FormStyles.MakeFeed().card}>
                  <div
                    style={{
                      display: "flex",
                      margin: "10px",
                      alignItems: "center"
                    }}
                  >
                    <div>
                      <span style={{ fontWeight: "900" }}>{x.City}</span>
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                      <span style={{ fontWeight: "900", fontSize: "xx-large" }}>
                        {x.Temp}
                      </span>
                    </div>
                  </div>

                  <div style={{ margin: "5px" }}>
                    <span style={{ fontWeight: "100" }}>{x.weather}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
