"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps {
  href: string;
  className?: string | ((state: { isActive: boolean }) => string);
  activeClassName?: string;
  children: React.ReactNode;
  [key: string]: any;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    { href, className, activeClassName, children, ...props },
    ref
  ) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    const resolvedClassName =
      typeof className === "function"
        ? className({ isActive })
        : cn(className, isActive && activeClassName);

    return (
      <Link ref={ref} href={href} className={resolvedClassName} {...props}>
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };

