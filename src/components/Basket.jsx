import Offcanvas from "react-bootstrap/Offcanvas";

function Basket({ setShow, basket, show }) {
  const handleClose = () => setShow(false);
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {basket.map((item, index) => (
            <div key={index} className="basket">
              <img src={item.basketImg} alt="" />
              <div>
                {item.basketTitle}
                <div>{item.basketPrice}$</div>
              </div>
              <div className="amount_inc">
                <button>+</button>
                <p>{item.basketAmount}</p>
                <button>-</button>
              </div>
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Basket;
