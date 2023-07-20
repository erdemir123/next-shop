"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const RouteMenu = () => {
  const pathname :string | null= usePathname();
  return (
    <div className="h-16 bg-gray-200 flex-center text-white font-bold text-md mt-6">
      {pathname?.startsWith("/") && (
        <>
          <Link href="/">Home</Link> <span>{pathname}</span>
        </>
      )}
    </div>
  );
};

export default RouteMenu;
