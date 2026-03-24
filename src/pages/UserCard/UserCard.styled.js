import styled from "styled-components";
import { hover01, hover03, SubTtl, topicColor } from "../../Global.styled";

export const Browse = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  background: rgba(0, 0, 0, 0.4);
  overflow-y: auto;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Block = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${($prop) => $prop.theme.header};
  max-width: max-content;
  width: min-content;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid ${($prop) => $prop.theme.border};
  position: relative;

  @media (min-width: 768px) {
    min-width: 500px;
  }
  @media (max-width: 650px) {
    padding: 20px 15px 60px;
  }
`;

export const Content = styled.div`
  display: block;
  text-align: left;
  opacity: 1;
`;

export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;

  @media (max-width: 650px) {
    margin-bottom: 8px;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;

  @media (max-width: 650px) {
    font-size: 16px;
  }
`;

export const Close = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;

export const Status = styled.div`
  margin-bottom: 11px;

  @media (max-width: 650px) {
    margin-bottom: 5px;
  }
`;

export const StatusP = styled.p`
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: ${({ $selectStatus }) => ($selectStatus ? " #fff;" : "#94a6be")};
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  background: ${({ $selectStatus }) => ($selectStatus ? " #94a6be;" : "")}
  &:hover {
    cursor: pointer;
  }
  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
      &:hover {
    cursor: pointer;
  }
  }
    @media (max-width: 650px) {
   padding: 5px 7px 5px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 650px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0px;
  }
`;

export const Form = styled.form`
      display: flex;
    flex-direction: column;
  margin-bottom: 20px;

  @media (max-width: 650px) {
      margin-bottom: 10px;
  }
}
`;

export const Label = styled.label`
 ${SubTtl}
}
`;

export const TextArea = styled.textarea`
  width: 250px;
  color:  ${($prop) => $prop.theme.text};
  padding: 14px;
  background: ${($prop) => $prop.theme.mainBackground};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  resize: none;

  @media (max-width: 425px) {
   margin-top: 5px;
    padding: 7px;
  }

  &::-moz-placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94a6be;
  letter-spacing: -0.14px;
}
  *::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94a6be;
  letter-spacing: -0.14px;
}
}
`;

export const Date = styled.p`
  padding-top: 10px;
  font-size: 14px;

  @media (max-width: 425px) {
    padding-top: 0px;
  }
`;

export const BtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const BtnGroup = styled.div`
  display: flex;

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: ${($prop) => $prop.theme.userName};
  margin-right: 8px;
  padding: 6px 10px;

  ${hover03}
`;

export const CloseButton = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  margin-right: 8px;
  padding: 6px 10px;

  ${hover01}
`;
