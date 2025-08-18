"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BodyClass() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (isHomePage) {
      document.body.classList.add("homepage");
    } else {
      document.body.classList.remove("homepage");
    }

    return () => {
      document.body.classList.remove("homepage");
    };
  }, [isHomePage]);

  return null;
}
