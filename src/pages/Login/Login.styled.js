import styled from "styled-components";
import { hover01, hover03 } from "../../Global.styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: ${($prop) => $prop.theme.mainBackground};
`;

export const Container = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BlockModal = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${($prop) => $prop.theme.header};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const ModalTtl = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input:first-child {
    margin-bottom: 7px;
  }
`;

export const Input = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  background: transparent;
  color: ${($prop) => $prop.theme.text};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;

  &::-moz-placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94a6be;
  }
`;

export const Error = styled.p`
  color: red;
  text-align: center;
  padding-top: 10px;
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;

  &:hover {
    ${hover01}
  }
`;

export const Buttonload = styled.button`
  width: 100%;
  height: 30px;
  background-color: rgb(128, 128, 128);
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;

  &:hover {
    background-color: rgb(128, 128, 128);
  }
`;

export const ModalGroup = styled.div`
  text-align: center;
  p {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -0.14px;
  }
  span {
    text-decoration: underline;
    cursor: pointer;
    color: #808080;
  }
`;
