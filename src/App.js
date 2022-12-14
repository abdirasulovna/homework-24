import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Form from "./components/Form";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isShow = useSelector((state) => state.ui.cartVisible);
  return (
    <Layout>
      {isShow && <Cart />}
      <Form />
      <Products />
    </Layout>
  );
}

export default App;
