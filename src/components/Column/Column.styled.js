import styled from "styled-components";

export const MainColumn = styled.div`
  display: block;
  text-align: center;

  @media screen and (max-width: 1200px) {
    display: block;
    text-align: start;
  }
`;

export const Title = styled.div`
  padding: 0 10px;
  margin: 15px 0;
  p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;
