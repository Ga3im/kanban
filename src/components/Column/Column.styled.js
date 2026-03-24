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
  min-width: 240px;
  p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }

  @media (max-width: 650px) {
    p {
      text-align: center;
    }
  }
`;

export const EmptyCardPlaceholder = styled.div`
  width: 220px;
  height: 130px;
  place-self: center;
  border: 2px dashed #94a6be;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-style: italic;
  margin-top: 10px;
  background-color: rgba(148, 166, 190, 0.05);
  pointer-events: none; /* Чтобы она не мешала событию Drop на колонке */
`;
