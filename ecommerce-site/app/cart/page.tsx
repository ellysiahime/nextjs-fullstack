'use client'
import Link from "next/link";
import { useState } from "react";
import { products } from "../product-data";

export default function CartPage() {
  const [cartIds] = useState(['123','345']);
  const cartProducts = cartIds.map(id => products.find(p => p.id === id)!);

  return (
    <main>
      <h1>Shopping Cart</h1>
      {cartProducts.map((product => 
        <Link key={product.id} href={"/products/" + product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </Link>
      ))}
    </main>
  );
}