import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const url = "/api/product";
const Airtable = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios(url);
      //   console.log(data);
      setProducts(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="section section-center">
      <div className="title">
        <h2>Airtable</h2>
        <div className="title-underline"></div>
      </div>
      <div className="products">
        {products.map((product) => {
          const { id, Name, price, url } = product;
          return (
            <Link to={`/${id}`} className="product" key={id}>
              <img src={url} alt={Name} />
              <div className="info">
                <h5>{Name}</h5>
                <h5 className="price">${price}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Airtable;
