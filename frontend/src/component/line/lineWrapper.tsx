import { styled } from "@stitches/react";

export const LineWrapper = styled("div", {
  display: "grid",
  width: "100%",
  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
  gap: "5px",
});
