import { useState } from "react";
import Basket from "./Basket";
import ShowCard from "./ShowCard";

function Cardlist({ data, show, setShow }) {
  const [basket, setBasket] = useState([]);
  console.log(basket);
  return (
    <div className="main">
      {data.map((item) => (
        <ShowCard
          {...item}
          key={item.id}
          setBasket={setBasket}
          basket={basket}
        />
      ))}

      <Basket setShow={setShow} show={show} basket={basket} />
    </div>
  );
}
export default Cardlist;
