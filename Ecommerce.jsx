import React, { useState } from "react";

function Ecommerce() {
  // List of products
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Smart Watch", price: 5000 }
  ];

  // State to store cart items
  const [cart, setCart] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial;
            background: linear-gradient(to right, #fbc2eb, #a6c1ee);
          }

          .container {
            max-width: 900px;
            margin: auto;
            padding: 20px;
          }

          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: white;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
          }

          .cart {
            background: #4CAF50;
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
          }

          .products {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
          }

          .product-card {
            background: white;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
          }

          button {
            margin-top: 10px;
            padding: 8px 12px;
            border: none;
            background-color: #ff5722;
            color: white;
            border-radius: 5px;
            cursor: pointer;
          }
        `}
      </style>

      <div className="container">
        {/* Header */}
        <div className="header">
          <h2>My Shop</h2>
          <div className="cart">Cart: {cart.length}</div>
        </div>

        {/* Product Listing */}
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Ecommerce;
