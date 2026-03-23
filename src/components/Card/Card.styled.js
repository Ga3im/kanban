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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 10px;
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

export const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const CardDescription = styled.div`
  width: 100%;
  font-size: 14px;
  text-align: start;
  margin-bottom: 10px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
