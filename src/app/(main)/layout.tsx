// React imports
import React from "react";

// Components

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm:pt-36 pt-24">
      {children}
    </div>
  );
}
