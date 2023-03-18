import ITFlocation from "../../interface/location.interface";
import { locationMap } from "./locationMap";

interface Props {
  locations: ITFlocation[];
}

export const locationList = ({ locations }: Props) => {
  const map = locationMap({ locations });
  const renderChildren = (parentCode: string | null): JSX.Element[] => {
    const children = map.get(parentCode ?? "") ?? [];
    return children.map((child) => (
      <li key={child.code}>
        {child.title}
        <ul>{renderChildren(child.code)}</ul>
      </li>
    ));
  };
  return <ul>{renderChildren(null)}</ul>;
};
