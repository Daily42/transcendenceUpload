/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component } from "react";
import { styled } from "@stitches/react";
// import { useNavigate } from "react-router-dom";
// import ITFevent from "../../interface/event.interface";
// import ITFlocation from "../../interface/location.interface";
// import typeIdToEventType from "../util/typeIdToEventType";

// export const PlaceDiv = styled("div", {
//   width: "calc(100% - 16px)",
//   backgroundColor: "rgba(10, 10, 10, 0.8)",
//   // border: "3px solid white",
//   color: "white",
//   borderRadius: "5px",
//   minHeight: "85px",
//   margin: "7.5px",
//   alignItems: "center",
//   justifyContent: "center",
//   cursor: "pointer",
//   display: "flex",
//   flexDirection: "column",
//   overflow: "hidden",

//   boxShadow: "0px 4px 4px #000000",
//   transitionDuration: "0.5s",
//   "&:hover": {
//     // backgroundColor: "rgba(255, 255, 255, 1.0)",
//     // color: "black"
//     backgroundColor: "rgba(0, 0, 0, 1.0)",
//   }
// });

// interface PlaceProps {
//   place: ITFlocation;
//   events: ITFevent[];
//   navigate: (path: string) => void;
// }

// class Place extends Component<PlaceProps> {
//   handlePlaceClick = () => {
//     this.props.navigate(`/daily/${this.props.place.title}`);
//   };

//   getIcon(eventTypeId: string) {
//     switch (eventTypeId) {
//       case "EV00":
//         return "🔴";
//       case "EV10":
//         return "🟢";
//       case "EV20":
//         return "🔵";
//       case "EV30":
//         return "🟣";
//       case "EV40":
//         return "⚫";
//       default:
//         return "";
//     }
//   }

//   render() {
//     const { place, events } = this.props;

//     return (
//       <PlaceDiv className="place" onClick={this.handlePlaceClick}>
//         <h3>{place.title}</h3>
//         {events.map((event) => {
//           const eventTypeId = typeIdToEventType(event?.typeId);

//           return (
//             <div key={event.id}>
//               <span>{this.getIcon(eventTypeId)}</span>
//               <span>{event.title}</span>
//             </div>
//           );
//         })}
//       </PlaceDiv>
//     );
//   }
// }

// export default Place;

export const Place = styled("div", {
  width: "calc(100% - 16px)",
  backgroundColor: "rgba(10, 10, 10, 0.8)",
  // border: "3px solid white",
  color: "white",
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
    // backgroundColor: "rgba(255, 255, 255, 1.0)",
    // color: "black"
    backgroundColor: "rgba(0, 0, 0, 1.0)",
  }
});
