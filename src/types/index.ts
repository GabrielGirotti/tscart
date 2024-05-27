export type Cd = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
  };

  export type CartItem = Cd & {
    quantity: number
  }