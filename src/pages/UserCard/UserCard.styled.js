import styled from "styled-components";
import { hover01, hover03, SubTtl, topicColor } from "../../Global.styled";

export const Browse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
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
  max-width: max-content;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid ${($prop) => $prop.theme.border};
  position: relative;
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
`;

export const Title = styled.div`
  color: ${($prop) => $prop.theme.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const Categories = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 6px 20px;
  border-radius: 24px;
  margin-right: 7px;
  cursor: pointer;
  opacity: ${({ $selectCat }) => ($selectCat ? "1" : "0.4")};
  ${({ $color }) => topicColor($color)}
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
`;

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Form = styled.form`
  min-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
}
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
}
`;

export const Label = styled.label`
 ${SubTtl}
}
`;

export const TextArea = styled.textarea`
  min-width: 500px;
  min-height: 330px;
  width: 100%;
  color:  ${($prop) => $prop.theme.text};
  outline: none;
  padding: 14px;
  background: ${($prop) => $prop.theme.mainBackground};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

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

export const ThemeDown = styled.div`
  margin-bottom: 20px;
`;

export const Cat = styled(StatusP)`
  ${SubTtl}
`;

export const BtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
`;

export const BtnGroup = styled.div`
  margin-right: 8px;
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
