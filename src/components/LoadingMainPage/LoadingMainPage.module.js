import styled, { keyframes } from "styled-components";

export const cardAnimation = keyframes`
0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
`;

export const Main = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.mainBackground};
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

export const MainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    text-align: start;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: block;
  position: relative;
`;

export const CardItem = styled.div`
  padding: 10px;
  animation-name: ${cardAnimation};
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const Card = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({ theme }) => theme.header};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  box-shadow: 0px 0px 20px -10px;
  
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Loader1 = styled.div`
  width: 82px;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background: linear-gradient(45deg, #c1cddc 0%, #e9eef7 100%);
`;

export const Loader2 = styled.div`
  width: 18px;
  height: 4px;
  background: linear-gradient(45deg, #c1cddc 0%, #e9eef7 100%);
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Loader3 = styled.div`
  width: 113px;
  height: 13px;
  background: linear-gradient(45deg, #c1cddc 0%, #e9eef7 100%);
`;

export const CardDate = styled.div`
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

export const Loader4 = styled.div`
  width: 58px;
  height: 13px;
  background: linear-gradient(45deg, #c1cddc 0%, #e9eef7 100%);
`;
