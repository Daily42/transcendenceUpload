import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ITFevent from "../interface/event.interface";
import DateType from "../enum/eventType.enum"
import { OuterBuilding, Building } from "./building/building"
import { BuildingName } from "./building/buildingName"
import { Line } from "./line/line"
import { LineName } from "./line/lineName"
import { LineWrapper } from "./line/lineWrapper"
import { Place } from "./place/place"
import { PlaceName } from "./place/placeName"
import { PlaceContent } from "./place/placeContent"
import { Event } from "./event/event"
import { getEventsList } from "../network/api/api"

// export function Gaepo() {
//   const navigate = useNavigate();
//   const names = ["폴라베어와함께하는어쩌고저쩌고반드시신나고",
//    "밤새면사람이미쳐간다니까요?진짜에요흐헤헤으흐헤헤헤헤", "!!!!헉!!!!!므ㅏ느암느아믕!~!!!"];

//   getEventsList().then((response) => {
//     console.log("response", response);
//   });

//   return (
//     <Building
//       onClick={() => {
//         navigate("/daily");
//       }}
//       style={{
//         // backgroundImage: "url(../../public/asset/texture_brick.png)",
//         backgroundColor: "rgba(200, 200, 200, 0.9)",
//       }}
//       className="building gaepo"
//     >
//       <Line key="row-5" className="row 5F">
//         <LineWrapper>
//           <Place className="C6">
//             <PlaceContent>
//               <PlaceName>C6</PlaceName>
//               <div>
//                 {names.slice(0, 2).map((name) => (
//                   <Event key={name}>{names}</Event>
//                 ))}
//                 {names.length > 2 && <Event>...</Event>}
//               </div>
//             </PlaceContent>
//           </Place>
//           <Place className="C5" />
//         </LineWrapper>
//       </Line>
//       <Line key="row-4" className="row 4F">
//         <LineWrapper>
//           <Place className="C4" />
//           <Place className="C3" />
//         </LineWrapper>
//       </Line>
//       <Line key="row-3" className="row 3F">
//         <LineWrapper>
//           <Place className="CX2" />
//           <Place className="CX1" />
//         </LineWrapper>
//       </Line>
//       <Line key="row-2" className="row 2F">
//         <LineWrapper>
//           <Place className="C2" />
//           <Place className="C1" />
//         </LineWrapper>
//       </Line>
//       <Line key="row-1" className="row 1F">
//         <LineWrapper>
//           <Place className="Open Cluster" />
//           <Place className="Game Center" />
//           <Place className="42 Lab">
//             .
//           </Place>
//         </LineWrapper>
//       </Line>
//       <Line key="row-0" className="row B1">
//         <LineWrapper>
//           <Place className="B1">
//             <PlaceContent>
//               .
//             </PlaceContent>
//           </Place>
//         </LineWrapper>
//       </Line>
//     </Building>
//   );
// }

export function Gaepo() {
  const navigate = useNavigate();
  const [events, setEvents] = useState<ITFevent[]>([]);

  useEffect(() => {
    getEventsList().then((response: any) => {
      console.log("response: ", response);
      setEvents(response);
    });
  }, []);


  return (
    <Building
      onClick={() => {
        navigate("/daily");
      }}
      style={{
        backgroundColor: "rgba(200, 200, 200, 0.9)",
      }}
      className="building gaepo"
    >
      {/* Rest of the lines */}
      <Line key="row-5" className="row 5F">
        <LineWrapper>
          <Place className="C6">
            <PlaceContent>
              <PlaceName>C6</PlaceName>
              {/* <div>
                {events.slice(0, 2).map((event) => (
                  <Event key={event}>{event}</Event>
                ))}
                {events.length > 2 && <Event>...</Event>}
              </div> */}
            </PlaceContent>
          </Place>
          <Place className="C5" />
        </LineWrapper>
      </Line>
      {/* Rest of the lines */}
    </Building>
  );
}
