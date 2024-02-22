import { css } from "@emotion/react";

export const layout = (isShow) => css`
  position: fixed;
  top: 0;
  left: ${isShow ? "0px" : "-300px"};

  width: 300px;
  height: 100%;
  transition: left 0.7s ease-in-out;
  background-color: black;
`;

export const toggleButton = css`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -15px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 15px;
  height: 50px;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  padding: 0;
  border: 1px solid #dbdbdb;
  background-color: white;

  transition: all 0.5s ease-in-out;

  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
  &:active {
    background-color: #ddd;
  }
`;