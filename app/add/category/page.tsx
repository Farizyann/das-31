import AddCategory from '@/app/components/AddCategory'
import { Metadata } from 'next';
import React from 'react'

export default function AddCategoryPage() {
  return (
    <AddCategory/>
  )
}

export const metadata: Metadata = {
  title: "Add Category",
};
