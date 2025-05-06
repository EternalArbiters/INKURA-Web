"use client";

import { usePathname } from "next/navigation";
import DashboardNavbar from "./DashboardNavbar";

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Tampilkan navbar kecuali di landing page
  const showNavbar = pathname !== "/";

  return (
    <>
      {showNavbar && <DashboardNavbar />}
      {children}
    </>
  );
}
