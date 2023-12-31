"use client";
import Aside from "@/components/Aside";
import RouteMenu from "@/components/RouteMenu";
import SmallFilter from "@/components/SmallFilter";
import SmallSort from "@/components/SmallSort";
import SortSelect from "@/components/SortSelect";
import { brands, categories } from "@/pages/api/data.json";
import { useAppSelector } from "@/toolkit/store/hooks";
import React, { useEffect, useState } from "react";

const page = () => {
  const {user} =useAppSelector((state)=>state.auth)
  console.log(user)
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowREsize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowREsize);
    return () => {
      window.removeEventListener("resize", handleWindowREsize);
    };
  }, []);
  return (
    <div>
      <RouteMenu />
      <div className="flex">
        {width > 768 && <Aside />}
        <div className="flex-1">
          {width > 768 && (
            <div className="flex-between mt-4">
              <p className="mb-3">Collections</p>
              <SortSelect />
            </div>
          )}
          {width < 768 && (
            <div className="flex flex-1 justify-between ">
              <p className="mb-3">Collections</p>
              <div className="sort-filter">
                <SmallSort />
                <SmallFilter brandItems={brands} categoryItems={categories} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
