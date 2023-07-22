import React from "react";
interface ıProps {
  children: React.ReactNode;
  href?: string;
}
const BetterLink = ({ children, href }: ıProps) => {
  return (
    <a href={href} className="flex-center gap-4">
      {children}
    </a>
  );
};

export default BetterLink;
