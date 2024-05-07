import React from "react";
import {
  ButtonCloseCart,
  ButtonRemoveItems,
  FinishPurchase,
  Footer,
  H2,
  HeaderItemsAdded,
  Item,
  ItemAddedToCart,
  ItemsAdded,
  Price,
  Span,
} from "./styled";

interface ItemsAddedProps {
  isVisible: boolean;

  setIsVisible: (isVisible: boolean) => void;
}

export const ItemAdded: React.FC<ItemsAddedProps> = ({
  isVisible,
  setIsVisible,
}) => {
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
        <Item>
          <ButtonRemoveItems>X</ButtonRemoveItems>
        </Item>
      </ItemAddedToCart>
      <Footer>
        <Price>
          <H2>Total:</H2>
          <Span>R$ 0,00</Span>
        </Price>
        <FinishPurchase>Finalizar Compra</FinishPurchase>
      </Footer>
    </ItemsAdded>
  );
};
