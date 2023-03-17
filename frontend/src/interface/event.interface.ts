import PlaceType from "../enum/placeType.enum"
import ITFlocation from "./location.interface"
import ITFdate from "./date.interface"

export default interface ITFevent {
  id: number; // event id seq
  title: string; // event title string
  typeId: 1;
  context: string;
  createdAt: string;
  locationCode: PlaceType;
  locationName: string;
  location: ITFlocation;
  dates: ITFdate[];
}
