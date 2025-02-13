import { Card } from "../Card/Card";

export const Column = ({ title, cardList }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      {cardList.map((i) => (
        <Card key={i.id} card={i} />
      ))}
    </div>
  );
};
