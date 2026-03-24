import { DayPicker } from "react-day-picker";
import styled from "styled-components";

export const StyledDayPicker = styled(DayPicker)`
  color: #94a6be;
  --rdp-cell-size: 20px;
  --rdp-day_button-height: 35px;
  --rdp-day_button-width: 35px;
    margin: 0px;
    font-size:16px;
  


  .rdp-day_today:not(.rdp-day_outside) {
    font-weight: bold;
  }
  .rdp-caption_label {
    font-size: 14px;
  }
  .rdp-tbody {
    font-size: 10px;
  }

  .rdp-selected .rdp-day_button {
    background-color: #94a6be;
    color: #fff;
    border: #94a6be;
  }

  .rdp-today:not(.rdp-outside) {
    color: #000;
    font-weight: bold;
  }

  .rdp-day_selected .rdp-day_selected:focus-visible,
  .rdp-day_selected:hover {
    background-color: #94a6be;
  }
  }

`;
export const Date = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 16.41px;
  font-weight: bold;
`;

export const CalPos = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: column;
  margin-bottom: 20px;

  @media (max-width: 650px) {
    gap: 0px;
    margin-bottom: 0px;
  }
`;

export const P = styled.div`
  display: flex;
  gap: 5px;
  font-size: 15px;
  line-height: 11.72px;
  color: #94a6be;
  div {
    color: #000;
  }
  p {
    color: red;
  }
`;
