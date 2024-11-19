import ProductDetails from '@/app/components/ProductDetails';
import { Metadata } from 'next';
import React from 'react'

export default function ProductPage({params} : any) {
  return (
    <ProductDetails id={params.id}/>
  )
}


export const metadata: Metadata = {
  title: "Product",
};
