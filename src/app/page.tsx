// React and Next
import React from "react";

// Background Grid
import BackgroundGrid from "@/components/backgroundGrid";

// Sections
import AnimatedHeaderSection from "@/sections/landing-page/AnimatedHeaderSection";
import SolutionSection from "@/sections/landing-page/SolutionSection";
import BookCallSection from "@/sections/landing-page/BookCallSection";
import HeaderNavbar from "@/sections/layout/Header";

// TODO: Add these sections back in
// import ExperienceSection from "@/sections/landing-page/ExperienceSection";
// import ClientsSection from "@/sections/landing-page/ClientsSection";


export default function Home() {
  return (
    <div className={`fixed inset-0 flex min-h-screen flex-col items-center justify-center`}>
      <BackgroundGrid />
      <HeaderNavbar />
      {/* <MainContent numFoundersBooked={numFoundersBooked} /> */}
      <div className="z-10 flex flex-col items-center gap-8 px-4 text-center">
        {/* Start Animated Header */}
        <AnimatedHeaderSection />
        {/* End Animated Header */}

        {/* Start Solution Section */}
        <SolutionSection />
        {/* End Solution Section */}

        {/* Start Button Group */}
        <BookCallSection />
        {/* End Button Group */}

        {/* Start Experience Section */}
        {/* <ExperienceSection /> */}

        {/* Start Clients Section */}
        {/* <ClientsSection /> */}
        {/* End Clients Section */}

        {/* End Experience Section */}
      </div>
    </div>
  );
}
