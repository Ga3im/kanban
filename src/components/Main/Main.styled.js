import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  background-color: ${(prop) => prop.theme.mainBackground};
  transition: all 0.25s linear;
  background: ${($bg) => $bg};
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Error = styled.p`
  color: red;
  font-size: 30px;
  text-align: center;
  padding-bottom: 300px;
  padding-top: 90px;
`;

export const Block = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
