import React from "react";
import { styled } from "@stitches/react";
import { useNavigate } from "react-router-dom";
import * as theme from "../theme/theme";

const NavMenu = styled("div", {
  backgroundColor: "#000000",
  minHeight: "40px",
  height: `40px`,
  width: `100%`,
});

const DefaultIcon = styled("img", {
  position: "absolute",
  maxHeight: "30px",
  top: "5px",
  height: "30px"
});

function Icon(props : any) {
  const { src, path } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <DefaultIcon
      src={src}
      onClick={handleClick}
    />
  );
}

export function ContainerNavMenu() {
  return (
    <NavMenu className="navMenu">
	  <Icon src="/asset/icon_logo.png" style="left: 10px" path="/daily" />
	  <Icon src="/asset/icon_logo.png" style="left: 500px" path="/daily" />
	  {/* <Icon src="/asset/icon_logo.png" path="/daily" /> */}
    </NavMenu>
  );
}
