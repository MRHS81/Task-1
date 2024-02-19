import { allData } from "../../data/data";
import CardItem from "./CardItem";

function CardsList() {
  return (
    <div className="cards-list">
      {allData.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CardsList;
