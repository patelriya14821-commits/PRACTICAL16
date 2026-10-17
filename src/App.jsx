import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  function addProduct(e) {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: name,
      price: price
    };

    setProducts([...products, newProduct]);

    setName("");
    setPrice("");
  }

  return (
    <div>
      <h1>Product Management</h1>

      <form onSubmit={addProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Add Product</button>
      </form>

      <h2>Product List</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>Product Name: {product.name}</p>
          <p>Price: ₹{product.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;