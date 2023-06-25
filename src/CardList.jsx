import Card from "./Card";
import "./index.css";
import data from "./data";

export default function CardList() {
  const cards = data.map((each_item) => {
    return <Card key={each_item.id} {...each_item} />;
  });

  return (
    <>
      <section className="cards-list">{cards}</section>
    </>
  );
}
