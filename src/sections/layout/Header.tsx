'use client'
import Link from "next/link";

// Components
import NavMotionButton from "@/components/buttons/NavMotionButton";
import HeaderNavigation from "@/components/header/HeaderNavigation";
import { usePathname } from "next/navigation";

export default function HeaderNavbar() {

    const pathname = usePathname();
    const isHome = pathname === "/";

  return (
    <nav className={`fixed inset-x-0 top-0 pt-2 z-50 motion-blur-in-sm motion-duration-500 motion-delay-300 motion-ease-in ${isHome ? '': 'backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto sm:px-10 px-5">
        <div className="flex justify-between h-14 items-center">
          <Link href="/" className="flex items-center justify-center" prefetch={false}>
            {/* <MountainIcon className="h-5 w-5" /> */}
            <span className="">architects.dev</span>
          </Link>

          {/* Navigation Links */}
          <HeaderNavigation />
          {/* End Navigation Links */}

          {/* Nav Motion Button */}
          <NavMotionButton />
          {/* End Nav Motion Button */}
        </div>
      </div>
    </nav>
  );
}

// function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }
