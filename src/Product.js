import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  // const data = useParams();
  // console.log(data);
  const { productID } = useParams();

  const fetchData = async () => {
    try {
      const { data } = await axios(`/api/product?id=${productID}`);
      setProduct(data);
      // console.log(data);
    } catch (error) {}
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <section className="section section-loading">
        <h2>Loading...</h2>
      </section>
    );
  }
  const { fields } = product;
  const { Name, Desc, price, Image } = fields;

  return (
    <section className="section section-center">
      <Link to="/" className="link">
        back home
      </Link>
      <div className="title">
        <h2>{Name}</h2>
        <div className="title-underline"></div>
      </div>
      <article className="single-product">
        <img src={Image[0].url} className="single-product-img" alt={Name} />
        <div>
          <h5>{Name}</h5>
          <h5 className="price">${price}</h5>
          <p>{Desc}</p>
        </div>
      </article>
    </section>
  );
};

export default Product;
