"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  PlusSquare,
  ShoppingBag,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/seller/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    href: "/seller/products",
    icon: Package,
  },
  {
    name: "Add Product",
    href: "/seller/add-product",
    icon: PlusSquare,
  },
  {
    name: "Orders",
    href: "/seller/orders",
    icon: ShoppingBag,
  },
];

export default function SellerSidebar() {
  return (
    <aside className="w-64 border-r bg-white p-6">
      <h2 className="mb-8 text-2xl font-bold">
        Seller Panel
      </h2>

      <nav className="space-y-3">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 rounded-xl p-3 hover:bg-amber-100"
            >
              <Icon size={20} />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}