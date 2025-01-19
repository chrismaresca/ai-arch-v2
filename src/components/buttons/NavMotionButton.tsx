"use client";
import React from "react";

import { usePathname } from "next/navigation";

// Components
import { MotionButton } from "@/components/buttons/MotionButton";

// Constants
import { CALENDAR_LINK, BOOK_CALL_CTA } from "@/constants";




export default function NavMotionButton() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <>
      {!isHome && (
        <div className="flex items-center gap-6">
          {/* <Button size="sm">Schedule a Call</Button> */}
          <MotionButton href={CALENDAR_LINK} buttonText={BOOK_CALL_CTA} size="sm" fromColor="bg-black" toColor="bg-blue-600" />
        </div>
      )}
    </>
  );
}
