import React from "react";
import { LogoIcon, WishlistIcon, CartIcon, UserIcon } from "../assets/icons";
import BetterLink from "./BetterLink";

const Navbar = () => {
  return (
    <div className="flex-between mt-8">
      <h1 >
        <BetterLink href="/">
          <LogoIcon />
          <p className="font-bold text-xl">Shopping</p>
        </BetterLink>
      </h1>
      <div className="flex gap-4">
        <BetterLink href="/wishlist">
          <WishlistIcon />
          {/* {wishlistCount > 0 && (
                <span className="badge">{wishlistCount}</span>
              )} */}
        </BetterLink>
        <BetterLink href="/cart">
          <CartIcon />
          {/* {cartCount > 0 && <span className="badge">{cartCount}</span>} */}
        </BetterLink>

        <button>
          <UserIcon />
        </button>
        {/* {isMenuVisible && (
            <Menu onClose={closeMenu} onSignOut={signOutHandler} />
          )} */}
      </div>
    </div>
  );
};

export default Navbar;
