import React from "react";
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
          <ImageProduct src="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp" />
          <ProductName>Apple Watch Series 4 GPS</ProductName>
          <ProductQuantity>
            <span>Qtd:</span>
            <Quantity>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </Quantity>
          </ProductQuantity>
          <TotalMoney>R$ 500,00</TotalMoney>
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
