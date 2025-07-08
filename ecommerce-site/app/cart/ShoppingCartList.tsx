'use client';

import Link from "next/link";
import { useState } from "react";
import { Product } from "../product-data";


export default function ShoppingCartList({initialCartProducts}: {initialCartProducts: Product[]}) {
  const [cartProducts, setCartProducts] = useState(initialCartProducts);

  async function removeFromCart(productId: string) {
    const response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + 'api/users/2/cart', {
      method: 'DELETE',
      body: JSON.stringify({ productId }),
      headers: {
        'Content-Type': 'application/json'
      }
  });
  const updatedCartProducts = await response.json();
  setCartProducts(updatedCartProducts);
  }
  
  return (
    <main>
      <h1>Shopping Cart</h1>
      {cartProducts.map((product => 
        <Link key={product.id} href={"/products/" + product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <div className="flex justify-end">
          <button 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={(e) => {
            e.preventDefault();
            removeFromCart(product.id);}}>Remove from Cart</button>
            </div>
        </Link>
      ))}
    </main>
  );
}