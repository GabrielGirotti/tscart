import type { Cd } from "../types";

type CdProps = {
  cd: Cd;
  addToCart: (item: Cd) => void;
};

export default function Cd({ cd, addToCart }: CdProps) {
  const { price, description, image, name } = cd;

  return (
    <div className="col-md-6 col-lg-4  row align-items-center justify-content-center">
      <div className="col-8">
        <img className="img-fluid" src={image} alt="imagen cd" />
      </div>
      <div className="col-8 ">
        <h3 className="text-black fs-4 fw-bold mt-3">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">$ {price}</p>
        <button
          onClick={() => addToCart(cd)}
          type="button"
          className="btn btn-dark w-100"
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
