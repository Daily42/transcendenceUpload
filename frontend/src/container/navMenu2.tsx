/* eslint-disable react/require-default-props */
import React, { useState } from "react";
import styled from "@emotion/styled";
import { DARK, LIGHT } from "../theme/theme";
import ContainerProps from "../interface/containerProps.interface";

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.darkMode ? DARK.HEADER_BACKGROUND : LIGHT.HEADER_BACKGROUND)};
  height: 40px;
  padding: 0 10px;
  color: ${(props) => (props.darkMode ? DARK.TEXT : LIGHT.TEXT)};
  text-shadow: 0.5px 0.5px 2px ${(props) => (props.darkMode ? DARK.SHADOW : LIGHT.SHADOW)};
`;

interface ButtonProps {
  color?: string;
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Button = styled.button<ButtonProps>`
  border: none;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
  outline: none;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0;
  box-shadow: 0 1px 4px ${(props) => props.color};
  transition-duration: 3s;

  &:hover {
    & > img {
      display: block;
    }
  }
`;

const ImgIcon = styled.img`
  width: 16px;
  height: 16px;
  display: none;
  opacity: 0.5;
`;

const Title = styled.div`
  margin-left: 20px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const DarkModeButton = styled.button`
  border: none;
  background-color: transparent;
  color: inherit;
  cursor: pointer;
  margin-right: 10px;
`;

export function ContainerNavMenu(
  props: {
    title: string,
    darkMode: boolean,
    toggleDarkMode: Function
  }
) {
  const { title, darkMode, toggleDarkMode } = props;

  return (
    <Container darkMode={darkMode}>
      <ButtonContainer>
        <Button color="#FF605C">
          <ImgIcon
            src="../../../public/asset/icon/exit.svg"
            alt="Exit Icon"
          />
        </Button>
        <Button color="#FFBD2E">
          <ImgIcon
            src="../../../public/asset/icon/minimize.svg"
            alt="Minimize Icon"
          />
        </Button>
        <Button color="#4CD964">
          <ImgIcon
            src="../../../public/asset/icon/maximize.svg"
            alt="Maximize Icon"
          />
        </Button>
        <Title>{title}</Title>
      </ButtonContainer>
      <DarkModeButton onClick={toggleDarkMode}>
        {darkMode ? "Turn off" : "Turn on"} Dark Mode
      </DarkModeButton>
    </Container>
  );
}
