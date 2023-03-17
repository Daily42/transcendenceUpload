import { styled } from "@stitches/react";

export const Event = styled("div", {
  display: "block",
  fontSize: "10px",
  margin: "5px",
  marginLeft: "7px",
  fontWeight: "bolder !important",
  overflow: "scroll",
  whiteSpace: "nowrap",
  "&::-webkit-scrollbar": {
    display: "none",
  }
})
