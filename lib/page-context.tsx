"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface PageContextType {
  isHomePage: boolean;
}

const PageContext = createContext<PageContextType>({ isHomePage: false });

export function PageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(pathname === "/");
  }, [pathname]);

  return (
    <PageContext.Provider value={{ isHomePage }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  return useContext(PageContext);
}
