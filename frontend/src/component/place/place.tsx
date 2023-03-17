import { styled } from "@stitches/react";

export const Place = styled("div", {
  width: "calc(100% - 16px)",
  backgroundColor: "rgba(10, 10, 10, 0.8)",
  // border: "3px solid white",
  color: "white",
  borderRadius: "5px",
  minHeight: "85px",
  margin: "7.5px",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",

  boxShadow: "0px 4px 4px #000000",
  transitionDuration: "0.5s",
  "&:hover": {
    // backgroundColor: "rgba(255, 255, 255, 1.0)",
    // color: "black"
    backgroundColor: "rgba(0, 0, 0, 1.0)",
  }
});
