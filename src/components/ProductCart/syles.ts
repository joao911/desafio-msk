import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  height: 285px;
  width: 218px;
  box-shadow: 0px 2px 8px 0px #00000022;
  border-radius: 8px;
  margin-top: 40px;

  @media (max-width: 768px) {
    width: 251px;
    height: 328px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 168px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  @media (max-width: 768px) {
    width: 100%;
    height: 208px;
  }
`;

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  height: 82px;
`;

export const TitleAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h3`
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: #000;
  margin: 0px;
`;
export const ChipPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #373737;
  color: #fff;
  width: 64px;
  height: 26px;
  border-radius: 5px;
`;

export const Price = styled.span`
  font-size: 15px;
  line-height: 15px;
  font-weight: 700;
  color: #fff;
`;

export const Description = styled.p`
  font-size: 10px;
  line-height: 12px;
  font-weight: 300;
  color: #2c2c2c;
`;
export const ButtonPurchase = styled.button`
  border: none;
  background-color: #0f52ba;
  color: #fff;
  width: 100%;
  height: 31px;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const TextButton = styled.p`
  font-weight: 600;
  size: 14px;
  line-height: 14.63px;
  line-height: 14px;
  color: #fff;
  margin-left: 15px;
`;
