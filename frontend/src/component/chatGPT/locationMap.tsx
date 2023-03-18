import ITFlocation from "../../interface/location.interface";

interface Props {
  locations: ITFlocation[];
}

export const locationMap = ({ locations }: Props) => {
  const map = new Map<string, ITFlocation[]>();
  locations.forEach((location) => {
    const parentCode = location.parentCode ?? "";
    const children = map.get(parentCode) ?? [];
    children.push(location);
    map.set(parentCode, children);
  });
  return map;
};
