import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Header = styled.header`
  background-color: #0f52ba;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 101px;
  padding: 0px 73px;

  @media (max-width: 768px) {
    padding: 0px 33px;
  }
`;

export const ContainerCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 90px;
  height: 45px;
  padding: 8px 16px;
  border-radius: 8px;

  span {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    width: 52px;
    height: 26px;
    border-radius: 8px;
  }
`;

export const Main = styled.main`
  background-color: #f9f9f9;
  padding: 95px 268px 62px 268px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr); /* 4 colunas em telas maiores */
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px;
    height: calc(100vh - 145px); /* Ajusta a altura para a tela menos 80px */
    overflow-y: auto;
  }
`;

export const Footer = styled.footer`
  background-color: #eeeeee;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
`;

export const TextFooter = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 14.63px;
  color: #000;
  text-align: center;
`;

export const Product = styled.div`
  background-color: #fff;
  height: 285px;
  width: 218px;
  box-shadow: 0px 2px 8px 0px #00000022;
  border-radius: 8px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  margin-top: 40px;
`;
