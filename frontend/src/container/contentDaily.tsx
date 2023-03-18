// React & libraries
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

// Enum & Interface
import ITFlocation from "../interface/location.interface";
import ContainerProps from "../interface/containerProps.interface";

// theme
import { DARK, LIGHT } from "../theme/theme";

// pre-made
import { Gaepo } from "../component/gaepo";
import { Seocho } from "../component/seocho";

// API
import { getLocationsList } from "../network/api/api"

// import { BuildingName } from "../component/building/buildingName"

const Contents = styled.div<ContainerProps>`
  height: calc(100% - 50px);
  width: 70%;
  margin-left: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  color: ${(props) => (props.darkMode ? DARK.TEXT : LIGHT.TEXT)};
  background-color: ${(props) => (props.darkMode ? DARK.BACKGROUND : LIGHT.BACKGROUND)};
  padding: 3vh;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: none;
    width: 0.6rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #bdbdbd;
    width: 0.4rem;
    right: 60px;
  }
`;


export function ContainerContents() {
  const [location, setLocation] = useState<ITFlocation[]>([]);

  useEffect(() => {
    getLocationsList().then((response: any) => {
      console.log("response: ", response);
      setLocation(response);
    });
  }, []);

  return (
    <Contents className="contents">
      <Gaepo />
      <Seocho />
    </Contents>
  );
}
