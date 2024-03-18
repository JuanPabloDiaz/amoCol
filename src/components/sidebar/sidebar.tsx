"use client";

import { Nav } from "@/components/Nav";
import { Logo } from "@/components/Logo";

export const Sidebar = () => {
  return (
    <main className="fixed flex min-h-screen w-[300px] min-w-[300px] flex-col gap-4 bg-black/80 p-4">
      <div>
        <Logo />
      </div>
      <div className="grow">
        <Nav ul_className="flex flex-col items-baseline gap-8" />
      </div>
    </main>
  );
};
