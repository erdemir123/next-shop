import React from 'react'
import BrandFilter from './BrandFilter' 
import {brands,categories} from "@/pages/api/data.json" 
import CategoryFilter from './categoryFilter'

function Aside() {
  return (
    <div className='mt-3 w-[15%] border pl-4'>
      <h3 className='text-lg font-medium '>Filters</h3>
      <BrandFilter items={brands}/>
      <CategoryFilter items={categories}/>
    </div>
  )
}

export default Aside
