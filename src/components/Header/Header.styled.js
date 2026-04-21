import styled from "styled-components";
import { hover01, hover02, hover03 } from "../../Global.styled";

export const Header = styled.header`
  width: 100%;
  background-color: ${(prop) => prop.theme.header};
  transition: all 0.25s linear;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
`;

export const Block = styled.div`
  height: 50px;
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

  @media (max-width: 600px) {
    display: none;
  }
`;

export const AddButtonMobile = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #565eef;
  border: none;
  position: relative;

  &:hover {
    ${hover01}
  }
  @media (max-width: 600px) {
    display: block;
  }
  @media (min-width: 600px) {
    display: none;
  }
`;
export const AddButtonMobileHor = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 16px;
  height: 3px;
  background-color: #fff;
`;

export const AddButtonMobileVer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 3px;
  height: 16px;
  background-color: #fff;
`;

export const Image = styled.img`
  width: 30px;
  margin-right: 7px;
  border-radius: 100%;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text || "#94A3B8"};
  transition: color 0.2s ease;

  &:hover {
    color: #565eef;
  }
`;

export const PopUserSet = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background-color: ${(props) => props.theme.header || "#FFFFFF"};
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 20px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  text-align: center;
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

export const Archive = styled.p`
  transition: all 0.3s;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
