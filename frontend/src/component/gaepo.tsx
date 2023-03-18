// React & libraries
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Interface & Enum
import ITFevent from "../interface/event.interface";

// Pre-made
import { Building } from "./building/building"
import { BuildingName } from "./building/buildingName"
import { Line } from "./line/line"
import { LineName } from "./line/lineName"
import { LineWrapper } from "./line/lineWrapper"
import { Place } from "./place/place"
import { PlaceName } from "./place/placeName"
import { PlaceContent } from "./place/placeContent"
import { Event } from "./event/event"

// API
import { getEventsList, getEventByDate } from "../network/api/api"

export function Gaepo() {
  const navigate = useNavigate();
  const [events, setEvents] = useState<ITFevent[]>([]);
  // const [locations, setLocations] = useState<ITFlocation[]>([]);

  useEffect(() => {
    getEventsList().then((response: any) => {
      // console.log("response: ", response);
      setEvents(response);
    });
  }, []);

  return (
    <Building
      onClick={() => {
        navigate("/daily");
      }}
      style={{
        // backgroundImage: "url(../../public/asset/texture_brick.png)",
        backgroundColor: "rgba(255, 255, 255, 1)",
        minHeight: "630px",
      }}
      className="building gaepo"
    >
      <Line key="row-5" className="row 5F">
        <LineWrapper>
          <Place location="C6" />
          <Place location="C5" />
        </LineWrapper>
      </Line>
      <Line key="row-4" className="row 4F">
        <LineWrapper>
          <Place location="C4" />
          <Place location="C3" />
        </LineWrapper>
      </Line>
      <Line key="row-3" className="row 3F">
        <LineWrapper>
          <Place location="CX2" />
          <Place location="CX1" />
        </LineWrapper>
      </Line>
      <Line key="row-2" className="row 2F">
        <LineWrapper>
          <Place location="C2" />
          <Place location="C1" />
        </LineWrapper>
      </Line>
      <Line key="row-1" className="row 1F">
        <LineWrapper>
          <Place location="Open Cluster" />
          <Place location="Game Center" />
          <Place location="42 Lab">
            .
          </Place>
        </LineWrapper>
      </Line>
      <Line key="row-0" className="row B1">
        <LineWrapper>
          <Place location="B1" />
        </LineWrapper>
      </Line>
    </Building>
  );
}

// export function Gaepo() {
//   const navigate = useNavigate();
//   const [events, setEvents] = useState<ITFevent[]>([]);

//   useEffect(() => {
//     getEventsList().then((response: any) => {
//       // console.log("response: ", response);
//       setEvents(response);
//     });
//   }, []);

//   return (
//     <Building
//       onClick={() => {
//         navigate("/daily");
//       }}
//       style={{
//         backgroundColor: "rgba(200, 200, 200, 0.9)",
//       }}
//       className="building gaepo"
//     >
//       {/* Rest of the lines */}
//       <Line key="row-5" className="row 5F">
//         <LineWrapper>
//           <Place location="C6">
//             <PlaceContent>
//               <PlaceName>C6</PlaceName>
//             </PlaceContent>
//           </Place>
//           <Place location="C5" />
//         </LineWrapper>
//       </Line>
//       {/* Rest of the lines */}
//     </Building>
//   );
// }
