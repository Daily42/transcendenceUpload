// react, libraries
import { styled } from "@stitches/react";
import { useNavigate } from "react-router-dom";
import { Event } from "../event/event";

// interface, enum

// pre-made
import { PlaceName } from "./placeName";

export const PlaceDiv = styled("div", {
  width: "calc(100% - 16px)",
  backgroundColor: "rgba(225, 225, 225, 1)",
  // border: "3px solid white",
  color: "rgba(0, 0, 0, 0.9)",
  borderRadius: "5px",
  minHeight: "85px",
  margin: "7.5px",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",

  boxShadow: "0px 4px 4px #000000",
  transitionDuration: "0.5s",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 1.0)",
    color: "black",
    // textShadow: "0.5px 0.5px 0.5px rgba(0, 0, 0, 0.8)",
  }
});

export function Place(props: any) {
  const { location } = props;
  const navigate = useNavigate();

  const path = "/add";
  const handleClick = () => {
    navigate(path);
  };

  const event1 = "11111123456789876543234567898765432134567891243235432";
  const event2 = "11111123456789876543234567898765432134567891243235432";

  return (
    <PlaceDiv onClick={handleClick} className={`place ${location}`}>
      <PlaceName>{location}</PlaceName>
      <Event event={event1} />
      <Event event={event2} />
    </PlaceDiv>
  )
}
