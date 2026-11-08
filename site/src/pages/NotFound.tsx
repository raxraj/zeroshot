import { Link } from "react-router-dom";
import SectionReveal from "@/components/SectionReveal";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 text-center">
      <SectionReveal>
        <h1 className="heading-1">404</h1>
        <p className="body-3 mt-4 text-gray-500">This page does not exist.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 button-md text-black transition-transform duration-300 hover:scale-[1.02]"
        >
          Back home
        </Link>
      </SectionReveal>
    </div>
  );
}