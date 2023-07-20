import React from 'react'
import CheckBox from './CheckBox'

function CategoryFilter({ items }: { items: string[] }) {
  return (
    <div>
      <div className="my-4 text-base ">Categories</div>
      {items
        .sort((a, b) => a.localeCompare(b))
        .map((item,index) => (
          <div className="flex items-center gap-2" key={index} >
            <CheckBox item={item} type="category" />
            <span className="text">{item}</span>
          </div>
        ))}
    </div>
  )
}

export default CategoryFilter
