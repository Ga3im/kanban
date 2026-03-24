import styled from "styled-components";
import { hover01 } from "../../Global.styled";

export const Card = styled.div`
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
  min-height: 100%;
  padding: 20px 16px;
`;

export const Block = styled.div`
  background-color: ${(props) => props.theme.header};
  max-width: 770px;
  width: min-content;
  padding: 40px 30px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media (max-width: 660px) {
    padding: 20px 16px;
    border-radius: 8px;
  }
`;

export const Content = styled.div`
  display: block;
  text-align: left;
`;

export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 660px) {
    margin-bottom: 10px;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.text};
  font-size: 20px;
  font-weight: 600;
`;

export const Close = styled.span`
  color: #94a6be;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    color: #000;
  }
`;

export const Status = styled.div`
  margin-bottom: 20px;
  @media (max-width: 660px) {
    margin-bottom: 10px;
  }
`;

export const StatusP = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  padding: 10px 14px;
  background: ${({ $selectStatus }) =>
    $selectStatus ? "#94a6be" : "transparent"};
  color: ${({ $selectStatus }) => ($selectStatus ? "#fff" : "#94a6be")};
  cursor: pointer;
  p {
    font-size: 14px;
  }

  @media (max-width: 660px) {
    padding: 5px 7px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 660px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Form = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 660px) {
    gap: 10px;
  }
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

export const Input = styled.input`
  width: 250px;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  color: ${(props) => props.theme.text};
  outline: none;

  @media (max-width: 660px) {
    padding: 5px 8px;
  }
`;

export const TextArea = styled.textarea`
  width: 250px;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  color: ${(props) => props.theme.text};
  resize: none;
  outline: none;
  @media (max-width: 660px) {
    padding: 5px 8px;
  }
`;

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  @media (max-width: 660px) {
    justify-content: center;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #565eef;
  color: #fff;
  border-radius: 4px;
  border: none;
  font-weight: 500;
  ${hover01};

  @media (max-width: 650px) {
    padding: 5px 20px;
  }
`;
