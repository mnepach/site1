function Header() {
  return (
    <header className="relative z-10 px-4 py-4 pt-16 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <div className="icon-leaf text-lg text-white"></div>
          </div>
          <div>
            <h1 className="text-base font-semibold text-[var(--text-dark)]">
              GreenGarden
            </h1>
            <p className="text-xs text-[var(--text-light)]">
              Саженцы смородины
            </p>
          </div>
        </div>

        <a
          href="tel:+375291234567"
          className="hidden sm:flex items-center gap-2 text-[var(--primary-color)] font-medium text-sm hover:text-[var(--accent-color)] transition-colors"
        >
          <div className="icon-phone text-base"></div>
          <span>+375 (29) 123-45-67</span>
        </a>

        <a
          href="tel:+375291234567"
          className="sm:hidden w-8 h-8 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center border border-[var(--border-color)]"
        >
          <div className="icon-phone text-base text-[var(--primary-color)]"></div>
        </a>
      </div>
    </header>
  );
}