"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LogoLinkProps {
  className?: string;
  children: React.ReactNode;
}

export function LogoLink({ className, children }: LogoLinkProps) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link href="/" onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
