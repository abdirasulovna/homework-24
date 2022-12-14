import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataHendler } from "../../store/reducers/uiSlice";

const Products = () => {



  const dispatch = useDispatch();

  const product = useSelector((state) => state.ui.products);
  console.log(product);

  const PRODUCT = [
    {
      id: "f1",
      price: 6,
      title: "My first book",
      description: "My first book I ever wrote",
    },
    {
      id: "f2",
      price: 10,
      title: "My Second book",
      description: "Harry Potter",
    },
  ];

  useEffect(() => {
    dispatch(getDataHendler());
  }, []);

  console.log();
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {product.map((item) => (
          <ProductItem
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            id={item.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
