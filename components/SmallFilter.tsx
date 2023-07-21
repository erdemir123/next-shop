import { FilterIcon } from '@/assets/icons'
import React, { useState } from "react";
import Modal from "./Modal";
import BrandFilter from './BrandFilter';
import CategoryFilter from './categoryFilter';

function SmallFilter({ brandItems, categoryItems }:{ brandItems:string[], categoryItems:string[] }) {
    const [showFilter, setShowFilter] = useState(false);
  return (
    <div>
      <button onClick={() => setShowFilter(!showFilter)}>
      <FilterIcon />
      </button>
      {showFilter && (
        <Modal setShowSort={setShowFilter}>
          <div className="">Filter</div>
            <div className="flex gap-4 ">
              <BrandFilter items={brandItems} />
              <CategoryFilter items={categoryItems} />
            </div>
        </Modal>
      )}
    </div>
  )
}

export default SmallFilter
