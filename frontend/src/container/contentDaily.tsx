/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import { styled } from "@stitches/react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as template from "./contentTemplate";
import * as theme from "../theme/theme";
import { ModalFirstLogin } from "../component/modal/modalFirstLogin";
import { isFirstLogin } from "../network/api/axios.custom";

const Contents = styled(template.Contents, {
  height: `calc(${theme.NAV_LEFT_HEIGHT} - 100px -  6vh)`,
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
  "&:hover": {
    filter: "brightness(1)",
  },
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

const Title0 = styled("div", {
  fontSize: "4vh",
  width: "100%",
  color: "rgba(233, 185, 30)",
  textAlign: "center",
  margin: 0,
  textShadow: "5px 5px 15px black",
});

const Title1 = styled("div", {
  fontSize: "3vh",
  fontWeight: "300",
  margin: 0,
  marginTop: "1.5vh",
  marginBottom: "1.5vh",
  // fontFamily: "Blippo",
});

const Text1 = styled("div", {
  fontSize: "2vh",
  fontWeight: "300",
  margin: 0,
  marginLeft: "1.2vh",
  width: "100%",
});

export function ContainerContents() {
  const style = theme.modalStyle;
  style.top = "50%";
  style.left = "50%";
  style.width = "90vw";
  style.height = "90vh";
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let control = true;

  useEffect(() => {
    isFirstLogin().then((response: any) => {
      if (response?.data === true && control === true) {
        setOpen(true);
        control = false;
      }
    })
  }, []);

  return (
    <Contents className="contents">
      <p>Hello WOrld asd!</p>
    </Contents>
  );
}
