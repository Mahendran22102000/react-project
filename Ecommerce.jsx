import React, { useState } from 'react';

const Ecommerce = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'IPHONE 15', price: 100000, description: 'Description of Product 1' },
    { id: 2, name: 'SAMSUNG', price: 50000, description: 'Description of Product 2' },
    { id: 3, name: 'ONEPLUS', price: 30000, description: 'Description of Product 3' },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>E-Commerce Store</h1>
      <div style={styles.main}>
        <ProductList products={products} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

const ProductList = ({ products, addToCart }) => (
  <div style={styles.productList}>
    {products.map((product) => (
      <Product key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
);

const Product = ({ product, addToCart }) => (
  <div style={styles.product}>
    <h2 style={styles.productName}>{product.name}</h2>
    <p style={styles.productDescription}>{product.description}</p>
    <p style={styles.productPrice}>Rupees{product.price}</p>
    <button onClick={() => addToCart(product)} style={styles.button}>Add to Cart</button>
  </div>
);

const Cart = ({ cart, removeFromCart }) => (
  <div style={styles.cart}>
    <h2 style={styles.cartTitle}>Cart</h2>
    {cart.length === 0 ? (
      <p style={styles.cartEmpty}>Your cart is empty</p>
    ) : (
      <div>
        {cart.map((product, index) => (
          <div key={index} style={styles.cartItem}>
            <p>{product.name} - Rupees{product.price}</p>
            <button onClick={() => removeFromCart(product)} style={styles.button}>Remove</button>
          </div>
        ))}
      </div>
    )}
  </div>
);

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  title: {
    fontSize: '2.5em',
    marginBottom: '20px',
  },
  main: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  productList: {
    width: '60%',
  },
  product: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
  },
  productName: {
    fontSize: '1.5em',
    margin: '0 0 10px 0',
  },
  productDescription: {
    fontSize: '1em',
    margin: '0 0 10px 0',
  },
  productPrice: {
    fontSize: '1.2em',
    margin: '0 0 20px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    background: '#007BFF',
    color: '#fff',
  },
  cart: {
    width: '30%',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
  },
  cartTitle: {
    fontSize: '1.5em',
    margin: '0 0 20px 0',
  },
  cartEmpty: {
    fontSize: '1em',
    color: '#999',
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
};

export default Ecommerce;
