import React from "react";
import { ShoppingBagOpen } from "phosphor-react";
import {
  ButtonPurchase,
  ChipPrice,
  Container,
  ContainerCart,
  Description,
  Price,
  ProductImage,
  TextButton,
  Title,
  TitleAndPrice,
} from "./syles";
import { size } from "lodash";
import { useStore } from "../../store";
import { ItemProps } from "../../store/types";

interface ProductCartProps {
  item: ItemProps;
}

export function formatPrice(price: number): string {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  let formattedPrice = formatter.format(price);
  if (formattedPrice.endsWith(",00")) {
    formattedPrice = formattedPrice.substring(0, formattedPrice.length - 3);
  }

  return formattedPrice;
}
export const ProductCart: React.FC<ProductCartProps> = ({ item }) => {
  const addNewCycle = useStore((state) => state.addToCart);
  function truncateString(str: string, num: number) {
    if (size(str) > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <Container>
      <ProductImage src={item.photo} />
      <ContainerCart>
        <TitleAndPrice>
          <Title>{item.name}</Title>
          <ChipPrice>
            <Price>{formatPrice(Number(item.price))}</Price>
          </ChipPrice>
        </TitleAndPrice>
        <Description>{truncateString(item.description, 47)}</Description>
      </ContainerCart>
      <ButtonPurchase onClick={() => addNewCycle(item)}>
        <ShoppingBagOpen size={20} />
        <TextButton>Comprar</TextButton>
      </ButtonPurchase>
    </Container>
  );
};
