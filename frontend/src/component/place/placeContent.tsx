import { styled } from "@stitches/react";

export const PlaceContent = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // Keep this as "flex-start"
  justifyContent: "flex-start", // Change this to "flex-start"
  padding: "5px",
  textAlign: "left",
  fontSize: "12px",
  overflow: "hidden"
});
