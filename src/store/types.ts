export interface ItemProps {
  brand: string;
  createdAt: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
  updatedAt: string;
}

export interface CartState {
  cart: ItemProps[];
  addToCart: (item: ItemProps) => void;
}
