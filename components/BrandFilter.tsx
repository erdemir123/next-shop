import React from "react";
import CheckBox from "./CheckBox";

function BrandFilter({ items }: { items: string[] }) {
  return (
    <div>
      <div className="my-4 text-base ">Brand</div>
      {items
        .sort((a, b) => a.localeCompare(b))
        .map((item,index) => (
          <div className="flex items-center gap-2  w-40" key={index} >
            <CheckBox item={item} type="brand" />
            <span className="">{item}</span>
          </div>
        ))}
    </div>
  );
}

export default BrandFilter;
