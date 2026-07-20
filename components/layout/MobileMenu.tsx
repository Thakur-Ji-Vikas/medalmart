"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40">

      <aside className="h-full w-72 bg-white p-6 shadow-xl">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Menu
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <nav className="flex flex-col gap-5">

          {NAV_LINKS.map((link) => (

            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="text-lg hover:text-amber-600"
            >
              {link.name}
            </Link>

          ))}

        </nav>

      </aside>

    </div>
  );
}