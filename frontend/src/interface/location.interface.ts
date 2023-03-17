import PlaceType from "../enum/placeType.enum"

export default interface ITFlocation {
  code: PlaceType;
  parentCode?: PlaceType;
  title: string;
  sort: number;
}
