import { styled } from "@stitches/react";

export const Building = styled("div", {
  // size & border & shadow
  width: "100%", // Update this line
  height: "100%",
  //   boxShadow: "0px 4px 4px #000000",
  boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.6)",

  // background
  backgroundSize: "500px",
  backgroundRepeat: "repeat",

  // content
  color: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingTop: "15px",
  paddingBottom: "15px",
  marginTop: "5px",
  marginBottom: "5px",

  // hover
  transitionDuration: "1s",
  "&:hover": {
    cursor: "pointer",
    opacity: 0.9,
    boxShadow: "inset 0px 0px 13px rgba(0, 0, 0, 0.5)",
  }
});
