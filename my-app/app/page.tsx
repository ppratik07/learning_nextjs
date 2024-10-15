import { AnimatedPinDemo } from "@/components/AnimatedPin";
import { FloatingDockDemo } from "@/components/FloatingDock";
import { NavbarDemo } from "@/components/Navbar";

export default function Home() {
  return(
      <div>
        <NavbarDemo/>
        <AnimatedPinDemo/>
        <FloatingDockDemo/>
      </div>
  );
}

