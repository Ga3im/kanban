import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${(prop) => prop.theme.mainBackground};
  transition: all 0.25s linear;
  padding: 0 30px;
  background: ${($bg) => $bg};

  @media (max-width: 650px) {
    padding: 0 10px;
  }
`;

export const BackBtn = styled.button`
  margin: 20px 0px;
  padding: 5px 10px;
  background-color: #565eef;
  border: none;
  color: #fff;

  @media (max-width: 650px) {
    margin: 15px 0px;
    padding: 3px 5px;
  }
`;

export const Title = styled.h1`
  padding-bottom: 30px;
  @media (max-width: 650px) {
    padding-bottom: 10px;
    font-size: 18px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-firection: column;
  flex-wrap: wrap;
  font-size: 20px;
`;
