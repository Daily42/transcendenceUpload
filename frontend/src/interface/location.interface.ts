import PlaceType from "../enum/placeType.enum"

export default interface ITFlocation {
  code: PlaceType;
  parentCode?: null | PlaceType;
  title: string;
  sort: number;
  parent?: ITFlocation;
}
