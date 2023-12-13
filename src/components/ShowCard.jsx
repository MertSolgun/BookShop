function ShowCard({ img, price, title, setBasket, basket, amount }) {
  const handleSubmit = () => {
    const basketItem = {
      basketImg: img,
      basketTitle: title,
      basketPrice: price,
      basketAmount: amount,
    };
    setBasket([...basket, basketItem]);
  };
  return (
    <div>
      <div>
        <img src={img} alt="" />
        <div className="book">
          <h3>{title}</h3>
          <h4>{price}$</h4>
          <button onClick={handleSubmit}>Add to Basket</button>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
