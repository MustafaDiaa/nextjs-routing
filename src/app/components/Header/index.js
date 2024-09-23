import React from "react";
import Link from "next/link";

function Header() {
  const routes = [
    { title: "Login", href: "/login" },
    { title: "About", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    { title: "Blog", href: "/" },
  ];

  return (
    <header className="bg-slate-100 shadow-md">
      <nav className="container mx-auto flex justify-center gap-20 py-5">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.title}
            className="text-gray-700 font-semibold transition-colors duration-300 hover:text-rose-600"
          >
            {route.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
