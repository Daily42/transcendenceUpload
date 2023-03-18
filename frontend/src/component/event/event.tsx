import { styled } from "@stitches/react";

export const EventDiv = styled("div", {
  width: "calc(90% - 6px)",
  display: "block",
  fontSize: "11px",
  padding: "3px",
  marginLeft: "50px",
  marginRight: "calc(50px + 1px)",
  fontWeight: "bolder !important",
  overflow: "scroll",
  whiteSpace: "nowrap",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "&:hover": {
    boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.3) inset",
  }
})

export function Event(props: any) {
  const { event, type } = props;

  return (
    <EventDiv>
      {event}
    </EventDiv>
  )
}
