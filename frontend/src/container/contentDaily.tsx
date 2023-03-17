import { styled } from "@stitches/react";
import * as theme from "../theme/theme";
import { Gaepo } from "../component/gaepo";
import { Seocho } from "../component/seocho";
// import { BuildingName } from "../component/building/buildingName"

const Contents = styled("div", {
  height: `calc(${theme.NAV_LEFT_HEIGHT} - 50px)`,
  width: "70%",
  marginLeft: "15%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "left",
  color: "white",
  padding: "3vh",
  overflowX: "hidden",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    background: "none",
    width: "0.6rem",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#BDBDBD",
    width: "0.4rem",
    right: "60px",
  },
});

export function ContainerContents() {
  return (
    <Contents className="contents">
      <Gaepo />
      <Seocho />
    </Contents>
  );
}
