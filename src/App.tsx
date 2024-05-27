import Header from "./components/Header";
import Cd from "./components/Cd";
import { useCart } from "./hooks/useCart";


function App() {
  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    addOneCd,
    removeOneCd,
    clearCart,
    cartTotal,
    isEmpty,
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        addOneCd={addOneCd}
        removeOneCd={removeOneCd}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Jinetes Fantasmas</h2>

        <div className="row mt-5 d-flex justify-content-center gap-4">
          {data?.map((cd) => (
            <Cd key={cd.id} cd={cd} addToCart={addToCart} />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-2">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            Hecho por Gabriel Girotti
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
