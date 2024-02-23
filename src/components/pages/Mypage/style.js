import { css } from "@emotion/react";

export const layout = css`
  padding: 100px 30px 0px;
`;

export const profileHeader = css`
  box-sizing: border-box;
  margin: 0px auto 20px;
  padding: 30px;
  border: 1px solid #dbdbdb;
  width: 700px;
  box-shadow: 1px 1px 5px #00000022;
`;

export const title = css`
  margin-bottom: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  cursor: default;
  
`;
export const profileImg = css`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0px auto 20px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  overflow: hidden;
  cursor: pointer;
  & > img {
    width: 100%;
  }
`
export const nicknameLayout = css`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  
`
export const nickname = css`
  box-sizing: border-box;
  width: 200px;
  border: none;
  border-bottom: 2px solid #dbdbdb;
  outline: none;
  padding: 5px 10px 0px;
  box-shadow: 1px 1px 5px #00000022;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  transition: background-color 0.3s ease-in-out;

  cursor: pointer;
  
  &:focus{
    border-bottom: 2px solid #eee;
    background-color: #fafafa;
  }
  &:hover{
    background-color: #fafafa;
    transition: background-color 0.2s ease-in-out;
  }
  
  `
export const profileInputLayout = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 0px auto 20px;
  border: 1px solid #dbdbdb;
  padding: 10px;
  width: 700px;
  box-shadow: 1px 1px 5px #00000022;
`
export const inputBox = css`
  position: relative;
  margin-bottom: 10px;
  &:nth-of-type(3n), :nth-of-type(4n) {
    margin: 0px;
  }
`
export const profileInput = css`
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  &:nth-of-type(3n), :nth-of-type(4n) {
    margin: 0px;
  }

  padding: 20px 20px 10px;
  width: 335px;

  color: #3333336c;
  font-size: 16px;
  font-weight: 500;

  &+label{
    position: absolute;
    font-weight: 600;
    top: 50%;
    transform: translateY(-50%);
    left: 21px;
    transition: all 0.2s ease-in-out;
  }

  &:focus + label, &:not(:placeholder-shown) + label {
    top: 13px;
    left: 21px;
    font-size: 11px;
  }

  &:focus {
    outline: 2px solid #8b9fa1;
    background-color: #fafafa;
    transition: background-color 0.2s ease-in-out;
  }

  &:hover{
    background-color: #fafafa;
    transition: background-color 0.2s ease-in-out;
  }

  cursor: pointer;
`

export const buttonLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const profilebutton = css`
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  padding: 10px 20px;
  height: 50px;
  width: 700px;
  background-color: white;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 1px 1px 5px #00000022;
  cursor: pointer;
  
  &:hover{
    background-color: #fafafa;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
  &:active{
    background-color: #eeeeee;
  }
`