import React from "react";
import { Products } from "@/components/data";
import { ProductCard } from "@/components/Home/ProductCard";

export default function App() {
  return (
    <div className="w-full h-full py-4 flex flex-wrap justify-center items-center gap-4">
      {Products.map((product, index) => {
        return <ProductCard key={index} index={index} product={product} />;
      })}
    </div>
  );
}
