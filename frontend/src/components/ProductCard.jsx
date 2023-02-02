import React from "react";
import {Stars} from "./Stars";
import { Button } from "./Button";


export const ProductCard = ({product, purchaseHandler}) => {
  return (
    <div href={product.description} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={product.thumbnail}
          className="object-contain h-48 w-96 mx-auto object-center hover:opacity-75 hover:scale-110"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.title} {product.brand}</h3>
      <Stars rating={Math.round(product.rating)}/>
      <p className="mt-1 text-xl font-medium text-gray-900">${product.price}</p>
      <Button onClick={() => purchaseHandler(product)}>Add to cart</Button>
      <p className="mt-1 text-md font-medium text-gray-900">Left in stock: {product.stock}</p>
    </div>
  )
}