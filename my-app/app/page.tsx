import { AnimatedPinDemo } from "@/components/AnimatedPin";
import { FloatingDockDemo } from "@/components/FloatingDock";
import { GoogleGeminiEffectDemo } from "@/components/Gemini";
import { NavbarDemo } from "@/components/Navbar";

export default function Home() {
  return(
      <div>
        <NavbarDemo/>
        <AnimatedPinDemo/>
        <FloatingDockDemo/>
        <GoogleGeminiEffectDemo/>
      </div>
  );
}

