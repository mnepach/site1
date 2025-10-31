function Header() {
  try {
    return (
      <header className="relative z-10 px-4 py-4 pt-16" data-name="header" data-file="components/Header.js">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <div className="icon-leaf text-lg text-white"></div>
            </div>
            <div>
              <h1 className="text-base font-semibold text-[var(--text-dark)]">GreenGarden</h1>
              <p className="text-xs text-[var(--text-light)]">Саженцы смородины</p>
            </div>
          </div>
          
          <button className="w-8 h-8 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center border border-[var(--border-color)]">
            <div className="icon-phone text-base text-[var(--primary-color)]"></div>
          </button>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}