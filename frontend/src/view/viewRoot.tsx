import React from "react";
import { styled } from "@stitches/react";
import { ViewTemplate } from "./viewTemplate2";

import { ContainerContents } from "../container/contentRoot";

export function Root() {
  return (
    <ViewTemplate content={<ContainerContents />} />
  );
}

export default Root;
