export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <span className="caption-2 text-white/50">© ZeroShot. MIT licensed.</span>
        <div className="flex items-center gap-6">
          <a href="https://github.com/raxraj/zeroshot" target="_blank" rel="noreferrer" className="caption-2 text-white/50 transition-colors duration-300 hover:text-white">
            GitHub
          </a>
          <a href="/storybook/" className="caption-2 text-white/50 transition-colors duration-300 hover:text-white">
            Storybook
          </a>
          <a href="#" className="caption-2 text-white/50 transition-colors duration-300 hover:text-white">
            Privacy
          </a>
          <a href="#" className="caption-2 text-white/50 transition-colors duration-300 hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}