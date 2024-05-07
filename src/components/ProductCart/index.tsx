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

interface ProductCartProps {
  image: string;
  name: string;
  description: string;
  price: string;
}
export const ProductCart: React.FC<ProductCartProps> = ({
  image,
  name,
  description,
  price,
}) => {
  function truncateString(str: string, num: number) {
    if (size(str) > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  function formatPrice(price: number): string {
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

  return (
    <Container>
      <ProductImage src={image} />
      <ContainerCart>
        <TitleAndPrice>
          <Title>{name}</Title>
          <ChipPrice>
            <Price>{formatPrice(Number(price))}</Price>
          </ChipPrice>
        </TitleAndPrice>
        <Description>{truncateString(description, 47)}</Description>
      </ContainerCart>
      <ButtonPurchase>
        <ShoppingBagOpen size={20} />
        <TextButton>Comprar</TextButton>
      </ButtonPurchase>
    </Container>
  );
};
