import styled from "styled-components";

interface ItemsAddedProps {
  isVisible: boolean;
}

export const ItemsAdded = styled.div<ItemsAddedProps>`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  width: 486px;
  background-color: #0f52ba;
  position: absolute;
  right: 0px;
  margin-top: 20px;
`;

export const HeaderItemsAdded = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  height: 60px;
  width: 90%;
  margin-top: 10px;
  color: #fff;
`;

export const ButtonCloseCart = styled.button`
  background-color: #000;
  border: none;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  border-radius: 50%;
  width: 38px;
  height: 38px;
`;

export const ItemAddedToCart = styled.div`
  margin-top: 68px;
  padding: 0 40px;
  overflow: auto;
  min-height: 639px;
  scrollbar-width: thin; /* Para Firefox */
  scrollbar-color: rgba(0, 0, 0, 0.5) transparent; /* Para Firefox */

  /* Para Chrome, Safari e Edge */
  &::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Cor de fundo da trilha da barra de rolagem */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5); /* Cor da barra de rolagem */
    border-radius: 4px; /* Borda arredondada para a barra de rolagem */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(
      0,
      0,
      0,
      0.7
    ); /* Cor da barra de rolagem ao passar o mouse */
  }
`;
export const Item = styled.div`
  margin-top: 25px;
  height: 101px;
  padding: 17px 31px 17px 17px;
  border-radius: 8px;
  background-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const ButtonRemoveItems = styled.button`
  background-color: #000;
  border: none;
  cursor: pointer;
  color: #fff;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 12px;
  font-weight: 700;
  position: relative;
  bottom: 0px;
  left: 378px;
  bottom: 68px;
`;

export const Footer = styled.footer``;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

export const H2 = styled.h2`
  font-size: 28px;
  line-height: 15px;
  font-weight: 700;
  color: #fff;
`;

export const Span = styled.span`
  font-size: 28px;
  line-height: 15px;
  font-weight: 700;
  color: #fff;
`;

export const FinishPurchase = styled.button`
  background-color: #000;
  border: none;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
  width: 100%;
  height: 97px;
`;

export const ImageProduct = styled.img`
  height: 88px;
  width: 88px;
`;

export const ProductName = styled.p`
  font-size: 13px;
  line-height: 17px;
  font-weight: 400;
  color: #000;
  margin-left: 15px;
`;
export const ProductQuantity = styled.div`
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;

  span {
    font-weight: 400;
    font-size: 10px;
    line-height: 6.1px;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 50px;
  height: 19px;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  margin-left: 10px 0px;
  /* padding: 3px; */
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 12px;
    line-height: 6.1px;
    color: #000;
  }

  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 6.1px;
    color: #000;
    margin: 0 5px;
    border-left: 1px solid #bfbfbf;
    border-right: 1px solid #bfbfbf;
    width: 15px;
    text-align: center;
    margin: 0px;
    height: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TotalMoney = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #000;
  width: 100px;
`;
