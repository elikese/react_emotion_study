import { css } from "@emotion/react";

export const layout = (isShow) => css`
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dbdbdb;
  
  width: 50%;
  height: ${isShow ? "80px" : "0px"};
  background-color: white;
  transition: all 0.5s;
`;

export const topBtn = css`
  box-sizing: border-box;
  position: absolute;
  width: 40px;
  height: 20px;

  right: 5%;
  bottom: -20px;
  border: 1px solid #dbdbdb;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
  &:active {
    background-color: #fff;
  }
`;

export const menuItem = css`
  width: 200px;
  height: 60%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dbdbdb;
  background-color: white;
  margin-left: 20px;
  transition: all 0.3s;
  text-decoration: none;
  font-weight: 600;
  &:nth-of-type(1) {
    margin-left: 0px;
  }
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
  &:active {
    background-color: #fff;
  }
`

export const menuName = (isShow) => css`
  opacity: ${isShow ? 1 : 0};
  transition: all 0.15s;
`