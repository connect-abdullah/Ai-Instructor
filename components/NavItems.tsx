"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SignedIn } from "@clerk/nextjs"

const publicNavItems = [
    {label : "Home", href : "/"},
    {label : "Companions", href : "/companions"},
]

const NavItems = () => {
    const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4 max-sm:gap-2">
        {publicNavItems.map(({label,href}) => (
            <Link
                href={href}
                key={label}
                className={`px-3 max-sm:px-1 max-sm:text-[11px] ${pathname === href ? 'text-primary font-semibold' : ''}`}
            >
                {label}
            </Link>
        ))}
        <SignedIn>
            <Link
                href="/my-journey"
                className={`px-3 max-sm:px-1 max-sm:text-[11px] ${pathname === '/my-journey' ? 'text-primary font-semibold' : ''}`}
            >
                My Journey
            </Link>
        </SignedIn>
    </nav>
  )
}

export default NavItems