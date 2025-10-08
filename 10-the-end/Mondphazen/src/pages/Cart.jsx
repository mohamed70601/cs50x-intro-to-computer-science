import React from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-stone-100 px-6 text-center">
      <h1 className="text-5xl font-bold text-stone-900 mb-6">🛒 Cart</h1>
      <p className="text-lg text-stone-700 mb-6">
        The shopping cart is under construction. It will be added soon!
      </p>
      <Link
        to="/store"
        className="bg-amber-50 text-stone-900 px-6 py-3 rounded-lg hover:bg-stone-300 transition"
      >
        Back to Store
      </Link>
    </div>
  );
}
