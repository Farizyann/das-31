import CategoryDetails from '@/app/components/CategoryDetails';
import { Metadata } from 'next';
import React from 'react'

export default function CategoryPage({params}:any) {
  return (
    <CategoryDetails id={params.id}/>
      
  )
}

export const metadata: Metadata = {
  title: "Category",
};
