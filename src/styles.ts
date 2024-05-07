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
`;

export const Main = styled.main`
  background-color: #f9f9f9;
  padding: 4.82rem 16.15rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
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
