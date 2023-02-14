import "./CardList.css";
import Card  from "../Card";

function CardList({ data }) {
  return (
    <>
      <div className="cardList position-relative d-flex">
        {data.map((element,id) => (
          <Card
          key={id}
            imageUrl={element.imageUrl}
            title={element.title}
            state={element}
          />
        ))}
      </div>
    </>
  );
}

export default CardList;