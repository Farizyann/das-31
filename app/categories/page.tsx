import { Metadata } from 'next';
import React from 'react'
import Categories from '../components/Categories';

export default function CategoriesPage() {
  return (
    <Categories/>
  )
}

export const metadata: Metadata = {
  title: "Categories",
};
