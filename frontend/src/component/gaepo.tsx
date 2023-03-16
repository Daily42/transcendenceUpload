import { useNavigate } from "react-router-dom";
import DateType from "../enum/dateType.enum"
import { OuterBuilding, Building } from "./building/building"
import { BuildingName } from "./building/buildingName"
import { Line } from "./line/line"
import { LineName } from "./line/lineName"
import { LineWrapper } from "./line/lineWrapper"
import { Place } from "./place/place"
import { PlaceContent } from "./place/placeContent"
import { Date } from "./date/date"

export function Gaepo() {
  const navigate = useNavigate();
  const names = ["폴라베어와함께하는어쩌고저쩌고반드시신나고", "밤새면사람이미쳐간다니까요?진짜에요흐헤헤으흐헤헤헤헤", "!!!!헉!!!!!므ㅏ느암느아믕!~!!!"];

  return (
    <OuterBuilding
      style={{
        backgroundImage: "url(../../public/asset/texture_brick.png)",
      }}
    >
      <Building
        onClick={() => {
          navigate("/daily");
        }}
        style={{
          // backgroundImage: "url(../../public/asset/texture_brick.png)",
          backgroundColor: "rgba(10, 10, 10, 0.8)",
        }}
        className="building gaepo"
      >
        <Line key="row-5" className="row 5F">
          <LineWrapper>
            <Place className="C6">
              <PlaceContent>
                <div>C6</div>
                <div>
                  {names.slice(0, 2).map((name) => (
                    <Date key={name}>{names}</Date>
                  ))}
                  {names.length > 2 && <div>...</div>}
                </div>
              </PlaceContent>
            </Place>
            <Place className="C5" />
          </LineWrapper>
        </Line>
        <Line key="row-4" className="row 4F">
          <LineWrapper>
            <Place className="C4" />
            <Place className="C3" />
          </LineWrapper>
        </Line>
        <Line key="row-3" className="row 3F">
          <LineWrapper>
            <Place className="CX2" />
            <Place className="CX1" />
          </LineWrapper>
        </Line>
        <Line key="row-2" className="row 2F">
          <LineWrapper>
            <Place className="C2" />
            <Place className="C1" />
          </LineWrapper>
        </Line>
        <Line key="row-1" className="row 1F">
          <LineWrapper>
            <Place className="Open Cluster" />
            <Place className="Game Center" />
            <Place className="42 Lab">
              .
            </Place>
          </LineWrapper>
        </Line>
        <Line key="row-0" className="row B1">
          <LineWrapper>
            <Place className="B1">
              <PlaceContent>
                .
              </PlaceContent>
            </Place>
          </LineWrapper>
        </Line>
      </Building>
    </OuterBuilding>
  );
}
