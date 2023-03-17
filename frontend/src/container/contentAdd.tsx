import React, { useEffect, useState } from "react";
import { styled } from "@stitches/react";
import * as theme from "../theme/theme";
import { isFirstLogin } from "../network/api/axios.custom";
import { BuildingName } from "../component/building/buildingName"
import { Gaepo } from "../component/gaepo";
import { Seocho } from "../component/seocho";

const Contents = styled("div", {
  backgroundColor: "#F0F0F0",
  height: `calc(${theme.NAV_LEFT_HEIGHT} - 50px)`,
  width: "70%",
  marginLeft: "15%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Update this to "center"
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
      <div />
    </Contents>
  );
}
