/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import { styled } from "@stitches/react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as theme from "../theme/theme";
// import { ModalFirstLogin } from "../component/modal/modalFirstLogin";
import { isFirstLogin } from "../network/api/axios.custom";

const Contents = styled("div", {
  backgroundColor: "#D9D9D9",
  height: `calc(${theme.NAV_LEFT_HEIGHT} - 50px)`,
  width: `50%`,
  marginLeft: `25%`,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
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
    background: "#222222",
    borderRadius: "3rem",
    width: "0.4rem",
    right: "60px",
  },
});

export function ContainerContents() {
  return (
    <Contents className="contents">
      <p>Hello WOrld asd!</p>
    </Contents>
  );
}
