import React from "react";

// Constants
import { SOLUTION_TEXT_WHO, SOLUTION_TEXT_WHAT_v2 } from "@/constants";

export default function SolutionSection() {
  return (
    <p className="max-w-xl text-[1.04rem] mx-3">
      <span className="text-muted-foreground">{SOLUTION_TEXT_WHO} </span>
      <span className="font-semibold">{SOLUTION_TEXT_WHAT_v2}</span>
    </p>
  );
}
