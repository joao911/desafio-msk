import { useEffect, useState } from "react";
import { map } from "lodash";

import {
  Container,
  ContainerCart,
  Footer,
  Header,
  Main,
  TextFooter,
} from "./styles";
import Logo from "./assets/logo.png";
import Cart from "./assets/Vector.png";
import { ItemAdded } from "./components/ItemAdded";
import { api } from "./api";
import { ItemProps } from "./store/types";
import { ProductCart } from "./components/ProductCart";
function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState<ItemProps[]>([]);

  async function getItems() {
    try {
      const response = await api.get(
        "/products?page=1&rows=8&sortBy=id&orderBy=DESC"
      );

      setProducts(response.data.products);
      console.log("response teste", products);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container>
      <Header>
        <img src={Logo} alt="logo" />
        <ContainerCart onClick={() => setIsVisible(true)}>
          <img src={Cart} alt="cart" />
          <span>0</span>
        </ContainerCart>
      </Header>
      <ItemAdded isVisible={isVisible} setIsVisible={setIsVisible} />
      <Main>
        {map(products, (product) => (
          <ProductCart key={product.id} item={product} />
        ))}
      </Main>
      <Footer>
        <TextFooter>
          João Paulo Duarte Desenvolvedor Frontend © Todos os direitos
          reservados
        </TextFooter>
      </Footer>
    </Container>
  );
}

export default App;
