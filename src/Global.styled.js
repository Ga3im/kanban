import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const topicColor = ($color) => css`
  ${$color === "Web Design" ? Orange : Gray}
  ${$color === "Research" ? Green : ""}
${$color === "Copywriting" ? Purple : ""}
`;

export const lightTheme = {
  body: "#FFF",
  text: "#000",
  header: "#FFFFFF",
  userName: "#565EEF",
  hoverColor: "#33399b",
  popUserSet: "#FFF",
  popUserBtn: "#565eef",
  mainBackground: "#eaeef6",
  purpleBg: "#e9d4ff",
  purpleText: "#9a48f1",
  orangeBg: "#ffe4c2",
  orangeText: "#ff6d00",
  greenBg: "#b4fdd1",
  greenText: "#06b16e",
  grayBg: "#94a6be",
  grayText: "#ffffff",
  borderExitPage: "#D4DBE5",
};

export const darkTheme = {
  body: "#363537",
  text: "#FFF",
  header: "#20202C",
  userName: "#858585",
  hoverColor: "#EAEEF6",
  popUserSet: "#000",
  popUserBtn: "#FFF",
  mainBackground: "#151419",
  purpleBg: "#9a48f1",
  purpleText: "#e9d4ff",
  orangeBg: "#ff6d00",
  orangeText: "#ffe4c2",
  greenBg: "#06b16e",
  greenText: "#b4fdd1",
  grayBg: "#94a6be",
  grayText: "#ffffff",
  borderExitPage: "#4E5566",
};

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  *:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

body {
 background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  transition: all 0.25s linear; 
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
}
  
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  transition: all 0.25s linear;
`;

export const hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;
export const hover02 = css`
  &: hover {
    color: ${(prop) => prop.theme.hoverColor};
    cursor: pointer;
  }
`;
export const hover03 = css`
  &: hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

export const Container = styled`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Orange = css`
  background-color: ${({ theme }) => theme.orangeBg};
  color: ${({ theme }) => theme.orangeText};
`;

export const Green = css`
  background-color: ${({ theme }) => theme.greenBg};
  color: ${({ theme }) => theme.greenText};
`;

export const Purple = css`
  background-color: ${({ theme }) => theme.purpleBg};
  color: ${({ theme }) => theme.purpleText};
`;

export const Gray = css`
  background-color: ${({ theme }) => theme.grayBg};
  color: ${({ theme }) => theme.grayText};
`;

export const SubTtl = css`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
