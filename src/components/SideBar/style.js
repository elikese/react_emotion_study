import { css } from "@emotion/react"; // <-- css` `; 하려고 import됨

export const layout = (isShow) => css`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: ${isShow ? "0px" : "-200px"};

  width: 200px;
  height: 100%;
  border-right: 1px solid #dbdbdb;
  transition: left 0.6s ease-in-out;
  background-color: white;
  box-shadow: 1px 0px 10px #00000022;
`;

export const toggleButton = (isShow) => css`
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

  opacity: ${isShow ? 1 : 0};
  transition: all ${isShow ? "0.15s" : "0.7s"};

  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
  &:active {
    background-color: #ddd;
  }
`;

export const toggleButton2 = (isShow) => css`
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

  opacity: ${isShow ? 0 : 1};
  transition: all ${isShow ? "0.7s" : "0.15s"};

  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
  &:active {
    background-color: #ddd;
  }
`;

export const menuList = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
`;

export const menuItem = css`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  height: 50px;

  color: black;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;

  &:nth-of-type(1) {
    border-top: 1px solid #dbdbdb;
  }
  &:hover {
    background-color: #eee;
  }

  cursor: pointer;
`;