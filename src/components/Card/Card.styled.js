import styled, { keyframes } from "styled-components";
import { topicColor } from "../../Global.styled";

const CardAnimation = keyframes`
0%{
  height: 0;
    opacity: 0;
}
100%{
height: auto;
    opacity: 1;
}`;

export const Cards = styled.div`
  width: 100%;
  display: block;
  position: relative;

  &:hover{
  cursor: pointer;}
  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
}
`;

export const CardItem = styled.div`
  padding: 10px;
  animation: ${CardAnimation} 500ms linear;
`;

export const CardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${(prop) => prop.theme.header};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  transition: all 0, 25s linear;
  box-shadow: inset 0px 0px 20px -10px;

  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 130px;
    background-color: ${(prop) => prop.theme.header};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
    transition: all 0, 25s linear;
  }
`;

export const Group = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  ${({ $color }) => topicColor($color)};
  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ;
  }
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${(prop) => prop.theme.text};
  margin-bottom: 10px;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;
