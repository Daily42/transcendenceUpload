import React from "react";
import { styled } from "@stitches/react";
import { useNavigate } from "react-router-dom";
import * as theme from "../theme/theme";

const NavMenu = styled("div", {
  display: "flex",
  minHeight: "50px",
  height: `50px`,
  justifyContent: "space-around",
  alignItems: "center",
  width: `100%`,
  border: "1px solid white",
});

const DefaultIcon = styled("img", {
  width: "10%",
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

const renderNavButtons = () => {
  const navButtons: any = [];
  navButtons.push(<Icon key={0} src="/asset/neon_icon_home.png" path="/daily" />);
  navButtons.push(<Icon key={1} src="/asset/neon_icon_game.png" path="/daily" />);
  navButtons.push(<Icon key={2} src="/asset/neon_icon_watch.png" path="/daily" />);
  navButtons.push(<Icon key={3} src="/asset/neon_icon_chat.png" path="/daily" />);
  return navButtons;
};

export function ContainerNavMenu() {
  return (
    <NavMenu className="navMenu">
      {renderNavButtons()}
    </NavMenu>
  );
}
