import { useEffect, useState } from "react";
import { map, size } from "lodash";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
import { useStore } from "./store";
function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState<ItemProps[]>([]);
  const [loading, setLoading] = useState(false);
  const { cart } = useStore();

  const loadingItems = Array(8).fill(0);

  async function getItems() {
    try {
      setLoading(true);
      const response = await api.get(
        "/products?page=1&rows=8&sortBy=id&orderBy=DESC"
      );

      setProducts(response.data.products);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
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
          <span>{size(cart)}</span>
        </ContainerCart>
      </Header>
      <ItemAdded isVisible={isVisible} setIsVisible={setIsVisible} />
      <Main>
        <>
          {loading ? (
            <>
              {map(loadingItems, (_, index) => (
                <Skeleton height={285} width={218} key={index} />
              ))}
            </>
          ) : (
            map(products, (product) => (
              <ProductCart key={product.id} item={product} />
            ))
          )}
        </>
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
