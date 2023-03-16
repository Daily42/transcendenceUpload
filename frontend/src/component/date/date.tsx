import { styled } from "@stitches/react";

export const Date = styled("div", {
  display: "block",
  width: "40%",
  fontSize: "16px",
  fontWeight: "bolder !important",
  overflow: "scroll",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  "&::-webkit-scrollbar": {
    display: "none",
  }
})
