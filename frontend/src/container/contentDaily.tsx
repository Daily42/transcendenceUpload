/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import { styled } from "@stitches/react";
import { useNavigate } from "react-router-dom";
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

/* 이벤트의 제목과 클리히면 해당 이벤트로 이동하는 노드 */
const DefaultNode = styled("div", {
  position: "absolute",
  backgroundColor: "white",
  height: "50px",
  width: "100px",
  cursor: "pointer",
  /* 아래는 꼭짓점을 둥글게 만들기 위한 옵션 */
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    opacity: 0.8,
  }
});

function Notice(props : any) {
  const { path, styled } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <DefaultNode
	    style={styled}
      onClick={handleClick}
    />
  );
}

/* 개포 */
const DefaultGeopo = styled("div", {
  position: "absolute",
  backgroundColor: "gray",
  height: `calc(${theme.NAV_LEFT_HEIGHT} - 100px)`,
  width: `50%`,
  cursor: "pointer",
  /* 아래는 꼭짓점을 둥글게 만들기 위한 옵션 */
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    opacity: 0.8,
  }
});

function Geopo(props : any) {
  const { path, styled } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <DefaultGeopo
	    style={styled}
      onClick={handleClick}
    />
  );
}

export function ContainerContents() {
  return (
    <Contents className="contents">
    <Geopo />
    <Notice />
    </Contents>
  );
}
