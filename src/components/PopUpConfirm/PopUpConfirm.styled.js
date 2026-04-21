import styled from 'styled-components';

export const PopUp = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

export const Block = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.header || "#FFFFFF"};
  max-width: 440px;
  width: 100%;
  padding: 40px 30px;
  border-radius: 12px;
  border: 0.7px solid #D4DBE5;
  position: relative;
  text-align: center;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.text || "#000000"};
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 30px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const BtnDelete = styled.button`
  width: 153px;
  height: 30px;
  background-color: #565EEF; // Можно сделать #F84D4D для опасного действия
  color: #FFFFFF;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #33399b;
  }
`;

export const BtnCancel = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  color: #565EEF;
  border-radius: 4px;
  border: 0.7px solid #565EEF;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: rgba(86, 94, 239, 0.1);
  }
`;
