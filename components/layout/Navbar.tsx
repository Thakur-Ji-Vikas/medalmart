"use client";
import { Heart } from "lucide-react";
import { useWishlist } from "@/hooks/useWishlist";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { Search, ShoppingCart, User, Trophy } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  // const cart = [];
  const { cart } = useCart();

  const { user } = useAuth();

  // Get wishlist items
  const { wishlist } = useWishlist();

  // Number of products in wishlist
  const wishlistCount = wishlist.length;

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Trophy className="text-amber-500" size={30} />
          <div>
            <h1 className="text-xl font-bold">{BRAND.name}</h1>
            <p className="text-xs text-gray-500 hidden md:block">
              {BRAND.tagline}
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-amber-500 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search */}
        <div className="hidden md:flex items-center border rounded-lg px-3 py-2 w-80">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search trophies, medals..."
            className="outline-none ml-2 w-full"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* <button>
            <User className="hover:text-amber-500" />
          </button> */}

          <Link href={user ? "/profile" : "/login"}>

            {/* <User className="hover:text-amber-500" /> */}
            
            <div className="flex items-center gap-2">
              <User className="hover:text-amber-500" />

              {user && (
                <span className="hidden text-sm font-medium md:block">
                  {user.name}
                </span>
              )}
            </div>
          </Link>

          {/* <button>
            <ShoppingCart className="hover:text-amber-500" />
          </button> */}

          <Link href="/wishlist" className="relative">
            <Heart
              className={`hover:text-red-500 ${
                wishlistCount > 0 ? "fill-red-500 text-red-500" : ""
              }`}
            />

            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link href="/cart" className="relative">
            <ShoppingCart className="hover:text-amber-500" />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
