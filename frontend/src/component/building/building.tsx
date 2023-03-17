import { styled } from "@stitches/react";

export const OuterBuilding = styled("div", {
  // size & border & shadow
  width: "100%", // Update this line
  boxShadow: "0px 4px 4px #000000",

  // background
  backgroundSize: "500px",
  backgroundRepeat: "repeat",

  // content
  color: "black",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingTop: "5px",
  paddingBottom: "5px",
  marginTop: "5px",
  marginBottom: "5px",

  // hover
  transitionDuration: "0.5s",
  "&:hover": {
    opacity: 0.9,
    boxShadow: "0px 4px 4px #202020",
  }
});

export const Building = styled("div", {
  // size & border & shadow
  width: "100%", // Update this line
  height: "100%",
  //   marginLeft: "5%",
  boxShadow: "0px 4px 4px #000000",

  // background
  backgroundSize: "500px",
  backgroundRepeat: "repeat",

  // content
  color: "black",
  borderRadius: "0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingTop: "15px",
  paddingBottom: "15px",
  marginTop: "5px",
  marginBottom: "5px",

  // hover
  transitionDuration: "0.5s",
  "&:hover": {
    opacity: 0.9,
    boxShadow: "0px 4px 4px #202020",
  }
});
