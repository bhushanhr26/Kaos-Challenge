export function MakeForm() {
  return {
    label: {
      fontWeight: "700",
      lineHeight: "28px",
      color: "#1D1D1F"
    },
    inp1: {
      background: "#FAFAFC",
      border: "2px solid #1D1D1F",
      boxSizing: "border-box",
      borderRadius: "10px",
      width: "240px",
      height: "50px"
    },
    inp2: {
      background: "#FAFAFC",
      border: "2px solid #1D1D1F",
      boxSizing: "border-box",
      borderRadius: "10px",
      width: "200px",
      height: "50px"
    },

    x: {
      background: " #1D1D1F",
      borderRadius: "20px",
      border: "1px solid black",
      color: "white",
      width: "28px"
    },
    div: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    addIfsc: {
      marginTop: "5px",
      background: " #1D1D1F",
      borderRadius: "12px",
      border: "1px solid black",
      color: "white",
      width: "100px"
    },
    submitbtn: {
      background: " #1D1D1F",
      borderRadius: "16px",
      border: "1px solid black",
      color: "white",
      width: "120px",
      height: "40px",
      marginTop: "18px",
      marginLeft: "10px"
    }
  };
}
export function MakeFeed() {
  return {
    div1: {
      width: "50px",
      height: "50px",
      border: "1px solid red",
      borderRadius: "25px",
      display: "flex",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white"
    },
    div2: {
      width: "40px",
      height: "40px",
      borderRadius: "20px",
      backgroundColor: "#c6c9cc",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "700"
    },
    card: {
      border: "2px solid #1D1D1F",
      boxSizing: "border-box",
      boxShadow: " 0px 4px 0px #000000",
      borderRadius: "16px",
      margin: "15px"
    }
  };
}
export function MakeHeader() {
  return {
    h1: {
      fontWeight: "700",
      fontSize: "24px",
      color: "#1D1D1F"
    },
    h2: {
      fontWeight: "700",
      fontSize: "18px",
      color: "#1D1D1F"
    }
  };
}
export function MakeNav() {
  return {
    container: {
      border: "1px solid black !important"
    }
  };
}
