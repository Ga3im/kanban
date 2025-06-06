import styled, { css } from "styled-components";
import {
  Gray,
  Green,
  hover01,
  Orange,
  Purple,
  SubTtl,
} from "../../Global.styled";

const activeCat = css`
  opacity: 1 !important;
`;

const catColor = ($cat) => css`
  ${$cat === "Web Design" ? Orange : Gray}
  ${$cat === "Research" ? Green : ""}
${$cat === "Copywriting" ? Purple : ""}
`;

export const Card = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const Block = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${($prop) => $prop.theme.header};
  max-width: 770px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const Content = styled.div`
  display: block;
  text-align: left;
`;

export const Title = styled.div`
  color: ${($prop) => $prop.theme.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
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
  color: ${({ $selectStatus, $status }) =>
    $selectStatus || $status ? " #fff;" : "#94a6be"};
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  background: ${({ $selectStatus, $status }) =>
    $selectStatus || $status ? " #94a6be;" : ""}
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
`;

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Form = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${($prop) => $prop.theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  color: ${($prop) => $prop.theme.text};
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-width: 370px;
  outline: none;
  padding: 14px;
  color: ${($prop) => $prop.theme.text};
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  max-width: 370px;
  margin-top: 14px;
  height: 200px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const Categorios = styled.div`
  margin-bottom: 20px;
`;

export const CatTitle = styled.p`
  margin-bottom: 14px;
  ${SubTtl}
`;

export const CatThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CatTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${({ $selectCat }) => ($selectCat ? "1" : "0.4")};
  cursor: pointer;

  ${({ $cat }) => catColor($cat)}
  //activeCat

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const Button = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  ${hover01};
`;
