import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Detail = (disp) => {
  const [product, setProduct] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    disp.visibility(true);
  }, [disp]);

  useEffect(() => {
    setIsAdmin(localStorage.getItem("isAdmin") === "true");
  }, []);

  useEffect(() => {
    let getPrdById = () => {
      axios
        .get(`http://localhost:2000/Products/${id}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => console.log(err));
    };
    getPrdById();
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:2000/products/${id}`)
      .then(() => {
        console.log("Product deleted successfully");
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="alert alert-primary ">
      <div className="card w-75 m-auto">
        <img
          src={product.thumbnail}
          className="card-img-top w-100 m-auto"
          alt="..."
          height="450"
        />
        <div className="card-body ">
          <h1>{product.title}</h1>
          <h5 className="card-title m-2">description: {product.description} </h5>
          <h5 className="card-title m-2">price: {product.price} $</h5>
          <h5 className="card-title  m-2">
            discountPercentage: {product.discountPercentage}{" "}
          </h5>
          <h5 className="card-title  m-2">rating: {product.rating} </h5>
          <h5 className="card-title  m-2">brand: {product.brand} </h5>
          <p className="card-text  m-2">
            {" "}
            Availability:{" "}
            {product.stock === 0 ? (
              <h1 className="text-danger">Out Of Stock</h1>
            ) : (
              product.price
            )}
          </p>
          <Link to="/products" className="btn btn-primary m-1">
            Go back
          </Link>
          {isAdmin && (
            <button onClick={handleDelete} className="deleteBtn">
              Delete Product
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
