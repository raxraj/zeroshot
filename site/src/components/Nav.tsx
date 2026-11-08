import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "@/lib/gsap";

const links = [
  { label: "Docs", to: "/docs" },
  { label: "Components", href: "/storybook/" },
  { label: "GitHub", href: "https://github.com/raxraj/zeroshot" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    if (!open || !panelRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "cubic-bezier(0.22,1,0.36,1)",
          stagger: 0.06,
        }
      );
    }, panelRef);
    return () => ctx.revert();
  }, [open]);

  return (
    <>
      <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
        <nav className="nav-float flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
          <Link to="/" className="flex items-center gap-2 px-2">
            <span className="heading-6">ZeroShot</span>
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) =>
              l.to ? (
                <Link
                  key={l.label}
                  to={l.to}
                  className="rounded-full px-3 py-1.5 caption-1 text-white/70 transition-colors duration-300 hover:text-white"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="rounded-full px-3 py-1.5 caption-1 text-white/70 transition-colors duration-300 hover:text-white"
                  target={l.href?.startsWith("http") ? "_blank" : undefined}
                  rel={l.href?.startsWith("http") ? "noreferrer" : undefined}
                >
                  {l.label}
                </a>
              )
            )}
          </div>
          <Link
            to="/docs"
            className="hidden rounded-full bg-indigo-500 px-4 py-1.5 button-sm text-white transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-indigo-400 md:inline-flex"
          >
            Read the docs
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white md:hidden"
          >
            <span className="relative block h-4 w-4">
              <span
                className={`absolute left-0 top-0.5 block h-0.5 w-4 bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "top-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 block h-0.5 w-4 bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[11px] block h-0.5 w-4 bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "top-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {open && (
        <div
          ref={panelRef}
          className="fixed inset-0 z-40 flex flex-col justify-center gap-6 bg-black/90 px-8 backdrop-blur-xl md:hidden"
          onClick={() => setOpen(false)}
        >
          {links.map((l, i) => {
            const cls =
              "title-1 text-white opacity-0";
            const el = l.to ? (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                ref={(el) => {
                  if (el) linksRef.current[i] = el as unknown as HTMLAnchorElement;
                }}
                className={cls}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                ref={(el) => {
                  if (el) linksRef.current[i] = el;
                }}
                className={cls}
                target={l.href?.startsWith("http") ? "_blank" : undefined}
                rel={l.href?.startsWith("http") ? "noreferrer" : undefined}
              >
                {l.label}
              </a>
            );
            return el;
          })}
          <Link
            to="/docs"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-fit rounded-full bg-indigo-500 px-6 py-3 button-md text-white"
          >
            Read the docs
          </Link>
        </div>
      )}
    </>
  );
}