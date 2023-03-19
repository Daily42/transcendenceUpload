/* eslint-disable import/no-unresolved */
// React & libraries
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

// Enum & Interface
import Ilocation from "../interface/location.interface";
import Props from "../interface/props.interface";

// theme
import { DARK, LIGHT } from "../theme/theme";

// pre-made
import { SearchEvents } from "../component/searchEvent2";

// API
import { getLocations } from "../network/api/axios.custom"

// import { BuildingName } from "../component/building/buildingName"

const Contents = styled.div<Props>`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  color: ${(props) => (props.darkMode ? DARK.TEXT : LIGHT.TEXT)};
  background-color: ${(props) => (props.darkMode ? DARK.BACKGROUND : LIGHT.BACKGROUND)};
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

export function ContainerContents(
  props: {
    darkMode: boolean,
    toggleDarkMode: Function
  }
) {
  const { darkMode, toggleDarkMode } = props;
  const [location, setLocation] = useState<Ilocation[]>([]);

  useEffect(() => {
    getLocations().then((response: any) => {
      console.log("response: ", response);
      setLocation(response);
    });
  }, []);

  return (
    <Contents className="contents" darkMode={darkMode}>
      <SearchEvents
        darkMode={darkMode}
      />
    </Contents>
  );
}
