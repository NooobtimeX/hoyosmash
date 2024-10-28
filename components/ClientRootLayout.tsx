"use client";

import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/section/Header";
import Footer from "@/components/section/Footer";
import PolicyPopup from "@/components/popup/PolicyPopup";
import { usePathname } from "next/navigation";

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.98 }}
        transition={{
          duration: 0.6,
        }}
        style={{
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <Header />
        <main className="mx-auto min-h-screen max-w-screen-xl">
          <div className="mx-2">{children}</div>
        </main>
        <span className="mx-auto mt-8 block w-full max-w-7xl border border-gray-800" />
        <Footer />
        <PolicyPopup />
      </motion.div>
    </AnimatePresence>
  );
}
