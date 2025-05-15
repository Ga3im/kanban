import styled from "styled-components";
import { hover01, hover02, hover03 } from "../../Global.styled";

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${(prop) => prop.theme.header};
  transition: all 0.25s linear;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Block = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const Logo = styled.img`
  width: 115px;
  cursor: pointer;
`;

export const Nav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  &:hover {
    ${hover01}
  }
`;

export const AddButtonDisable = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: rgb(128, 128, 128);
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 30px;
  margin-right: 7px;
  border-radius: 100%;
`;

export const User = styled.p`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${(prop) => prop.theme.userName};

  &:hover {
    ${hover02}
  }

  &:hover::after {
    border-left-color: ${(prop) => prop.theme.hoverColor};
    border-bottom-color: ${(prop) => prop.theme.hoverColor};
  }

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${(prop) => prop.theme.userName};
    border-bottom: 1.9px solid ${(prop) => prop.theme.userName};
    transform: ${(prop) =>
      prop.$isOpen ? "rotate(135deg)" : "rotate(-45deg)"};
    margin: 0px 0 0 5px;
    padding: 0;
  }
`;

export const PopUserSet = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${(prop) => prop.theme.popUserSet};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const UserName = styled.p`
  color: ${(prop) => prop.theme.text};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const UserMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${(prop) => prop.theme.text};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #eaeef6;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input[type="checkbox"]::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.5s;
  }
  input:checked[type="checkbox"]::before {
    left: 12px;
    background: #565eef;
  }
`;

export const PopUserExitBtn = styled.button`
  padding: 5px 10px;
  color: ${(prop) => prop.theme.popUserBtn};
  border: solid 1px ${(prop) => prop.theme.popUserBtn};
  border-radius: 4px;
  box-shadow: 0px 0px 20px -3px;
  background: ${(prop) => prop.theme.popUserSet};
  margin-top: 30px;
  ${hover03};
`;
