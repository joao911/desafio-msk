import React, { useMemo } from "react";
import {
  ButtonCloseCart,
  ButtonRemoveItems,
  FinishPurchase,
  Footer,
  H2,
  HeaderItemsAdded,
  ImageProduct,
  Item,
  ItemAddedToCart,
  ItemsAdded,
  Price,
  ProductName,
  ProductQuantity,
  Quantity,
  Span,
  TotalMoney,
} from "./styled";
import { useStore } from "../../store";
import { map, reduce } from "lodash";
import { formatPrice } from "../ProductCart";

interface ItemsAddedProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export const ItemAdded: React.FC<ItemsAddedProps> = ({
  isVisible,
  setIsVisible,
}) => {
  const { cart } = useStore();
  const removeItemsToCart = useStore((state) => state.removeFromCart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const clearCart = useStore((state) => state.clearCart);

  const total = useMemo(() => {
    return reduce(
      cart,
      (sum, item) => {
        return sum + Number(item.price) * item.quantity;
      },
      0
    );
  }, [cart]);

  return (
    <ItemsAdded isVisible={isVisible}>
      <HeaderItemsAdded>
        <h1>
          Carrinho
          <br /> de compras
        </h1>
        <ButtonCloseCart
          onClick={() => {
            setIsVisible(false);
          }}
        >
          X
        </ButtonCloseCart>
      </HeaderItemsAdded>

      <ItemAddedToCart>
        {map(cart, (item) => (
          <Item key={item.id}>
            <ButtonRemoveItems
              onClick={() => {
                removeItemsToCart(item.id);
              }}
            >
              X
            </ButtonRemoveItems>
            <ImageProduct src={item.photo} />
            <ProductName>{item.name}</ProductName>
            <ProductQuantity>
              <span>Qtd:</span>
              <Quantity>
                <button onClick={() => decreaseQuantity(item.id)}> - </button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}> + </button>
              </Quantity>
            </ProductQuantity>
            <TotalMoney>
              {formatPrice(Number(item.price) * item.quantity)}
            </TotalMoney>
          </Item>
        ))}
      </ItemAddedToCart>
      <Footer>
        <Price>
          <H2>Total:</H2>
          <Span>{formatPrice(total)}</Span>
        </Price>
        <FinishPurchase onClick={clearCart}>Finalizar Compra</FinishPurchase>
      </Footer>
    </ItemsAdded>
  );
};
