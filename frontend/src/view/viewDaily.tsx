import React from "react";
import { ViewTemplate } from "./viewTemplate";

import { ContainerContents } from "../container/contentDaily";

export function Daily() {
  return (
    <ViewTemplate content={<ContainerContents />} />
  );
}

export default Daily;
