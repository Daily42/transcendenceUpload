import React from "react";
import { styled } from "@stitches/react";
import { useNavigate } from "react-router-dom";

const NavMenu = styled("div", {
  backgroundColor: "#000000",
  minHeight: "40px",
  height: "40px",
  width: "100%",
});

const DefaultIcon = styled("img", {
  position: "absolute",
  maxHeight: "30px",
  top: "5px",
  height: "30px"
});

function MenuButton(props : any) {
  const { src, path, styled } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <DefaultIcon
      src={src}
      style={styled}
      onClick={handleClick}
    />
  );
}

export function ContainerNavMenu() {
  return (
    <NavMenu className="navMenu">
      <MenuButton
        styled={{
          left: "10px",
          cursor: "pointer"
        }}
        className="logo"
        src="/asset/icon_logo.png"
        path="/daily"
      />
      <MenuButton
        styled={{
          right: "10px",
          cursor: "pointer"
        }}
        className="login"
        src="/asset/login_button.png"
        path="/daily"
      />
    </NavMenu>
  );
}
