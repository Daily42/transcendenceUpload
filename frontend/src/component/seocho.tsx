import { useNavigate } from "react-router-dom";
import DateType from "../enum/eventType.enum"
import { Building } from "./building/building"
import { BuildingName } from "./building/buildingName"
import { Line } from "./line/line"
import { LineName } from "./line/lineName"
import { LineWrapper } from "./line/lineWrapper"
import { Place } from "./place/place"
import { PlaceContent } from "./place/placeContent"

export function Seocho() {
  const navigate = useNavigate();

  return (
    <Building
      onClick={() => {
        navigate("/daily");
      }}
      style={{
        backgroundImage: "url(../../public/asset/texture_brick_gray.png)",
        height: "",
        marginBottom: "50px"
      }}
      className="building seocho"
    >
      <Line key="row-2" className="row 5F">
        <LineWrapper>
          <Place className="C10" />
          <Place className="C9" />
        </LineWrapper>
      </Line>
      <Line key="row-1" className="row 4F">
        <LineWrapper>
          <Place className="C8" />
          <Place className="C7" />
        </LineWrapper>
      </Line>
    </Building>
  );
}
