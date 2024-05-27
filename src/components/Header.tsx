import type { Cd, CartItem } from "../types";

type HeaderProps = {
  cart: CartItem[];
  removeFromCart(id: Cd["id"]): void;
  addOneCd(id: Cd["id"]): void;
  removeOneCd(id: Cd["id"]): void;
  clearCart: () => void
  isEmpty: () => boolean
  cartTotal: () => number
};

export default function Header({
  cart,
  removeFromCart,
  addOneCd,
  removeOneCd,
  clearCart,
  isEmpty,
  cartTotal,
}: HeaderProps) {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img className="img-fluid" src="img/logo.svg" alt="imagen logo" />
            </a>
          </div>
          <nav className="col-md-6 a d-flex align-items-center justify-content-end px-2">
            <div className="carrito  ">
              <img
                className="img-fluid"
                src="img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="bg-white p-3">
                {isEmpty() ? (
                  <p className="text-center">El carrito esta vacio</p>
                ) : (
                  <>
                    <table className="w-100 table">
                      <thead>
                        <tr>
                          <th>Imagen</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((cd) => (
                          <tr key={cd.id}>
                            <td>
                              <img
                                className="img-fluid"
                                src={cd.image}
                                alt="imagen cd"
                              />
                            </td>
                            <td>{cd.name}</td>
                            <td className="fw-bold">${cd.price}</td>
                            <td className="flex align-items-start gap-4">
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => removeOneCd(cd.id)}
                              >
                                -
                              </button>
                              {cd.quantity}
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => addOneCd(cd.id)}
                              >
                                +
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => removeFromCart(cd.id)}
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <p className="text-end">
                      Total pagar:{" "}
                      <span className="fw-bold">${cartTotal()}</span>
                    </p>

                    <button
                      className="btn btn-dark w-100 mt-3 p-2"
                      onClick={clearCart}
                    >
                      Vaciar Carrito
                    </button>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
