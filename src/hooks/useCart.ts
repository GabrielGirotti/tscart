import { useState, useEffect } from "react";
import type { Cd, CartItem } from "../types";
import { db } from "../data/db";

export const useCart = () => {
  const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data, setData] = useState<Cd[]>([]);

  const [cart, setCart] = useState(initialCart);

  const MIN_ITEM = 1;

  useEffect(() => {
    setData(db);
  }, []);

  function addToCart(item: Cd) {
    const itemExist = cart.findIndex((cd) => cd.id === item.id);

    if (itemExist === -1) {
      const newItem: CartItem = { ...item, quantity: 1 };

      setCart([...cart, newItem]);
    } else {
      const updateCart = [...cart];
      updateCart[itemExist].quantity++;
      setCart(updateCart);
    }
  }

  function removeFromCart(id: Cd["id"]) {
    setCart((prevCart) => prevCart.filter((cd) => cd.id !== id));
  }

  function addOneCd(id: Cd["id"]) {
    const updateCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  }

  function removeOneCd(id: Cd["id"]) {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEM) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  }

  function clearCart() {
    setCart([]);
  }

  function saveLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  useEffect(() => {
    saveLocalStorage();
  }, [cart]);

  const isEmpty = () => cart.length === 0;
  const cartTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    addOneCd,
    removeOneCd,
    clearCart,
    isEmpty,
    cartTotal,
  };
};
