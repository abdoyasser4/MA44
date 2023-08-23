import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import "../Styles/Add.css"
export default function AddProducts() {
  const [prod, setProd] = useState({
    title: '',
    price: 0,
    description: '',
    image: 'https://source.unsplash.com/random',
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProd((old) => ({
      ...old,
      [name]: value,
    }));
  };

  const addprd = (e) => {
    e.preventDefault();
    axios.post("http://localhost:2000/products", prod)
      .then((res) => {
        console.log(res);
        navigate('/products');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='parent'>
    <div className='parent2'>
      <h1>Add-product</h1>
      <form onSubmit={addprd}>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="title" name="title" value={prod.title} placeholder="Product - name" onChange={handleChange} />
        </div>
        <div className="form-floating mb-3">
          <input type="number" className="form-control" id="floatingInput" name="price" placeholder="Product - Price" value={prod.price} onChange={handleChange} />
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" name="description" placeholder="description" value={prod.description} onChange={handleChange} />
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" name="image" value={prod.image} onChange={handleChange} />
        </div>
        <button className="btn btn-danger" type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}
