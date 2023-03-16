import React from "react";
import { styled } from "@stitches/react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ReducerType } from "../redux/rootReducer";
import { AuthData } from "../redux/slices/auth";

import { ContainerNavMenu } from "../container/navMenu";

export const ViewWrapper = styled("div", {
  display: "block",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  backgroundColor: "#2D2D2D",
});

export function ViewTemplate({ content } : any) {
//   const auth = useSelector<ReducerType, AuthData>((state) => state.auth);

  //   if (!auth.auth || (auth.isRequire2f && !auth.auth2f)) {
  //     return (<Navigate replace to="/daily" />);
  //   }

  return (
    <ViewWrapper className="view">
      <ContainerNavMenu />
      {content}
    </ViewWrapper>
  );
}

export default ViewTemplate;
