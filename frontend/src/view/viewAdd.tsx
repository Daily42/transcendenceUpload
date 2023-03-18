import React from "react";
import { styled } from "@stitches/react";
import { ViewTemplate } from "./viewTemplate";

import { ContainerContents } from "../container/contentAdd";

export function Add() {
  return (
    <ViewTemplate content={<ContainerContents />} />
  );
}

export default Add;
