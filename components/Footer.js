function Footer() {
  try {
    return (
      <footer id="contacts" className="px-4 py-8 bg-[var(--text-dark)] text-white" data-name="footer" data-file="components/Footer.js">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-2xl gradient-bg flex items-center justify-center">
              <div className="icon-leaf text-lg text-white"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">GreenGarden</h3>
              <p className="text-sm opacity-75">Саженцы для дачи</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <a
              href="tel:+375291234567"
              className="flex items-center justify-center space-x-2 hover:opacity-80 active:opacity-60 transition-opacity"
            >
              <div className="icon-phone text-[var(--accent-color)]"></div>
              <span className="underline decoration-dotted underline-offset-4">+375 (29) 123-45-67</span>
            </a>

            <a
              href="mailto:info@greengarden.by"
              className="flex items-center justify-center space-x-2 hover:opacity-80 active:opacity-60 transition-opacity"
            >
              <div className="icon-mail text-[var(--accent-color)]"></div>
              <span className="underline decoration-dotted underline-offset-4">info@greengarden.by</span>
            </a>

            <div className="flex items-center justify-center space-x-2">
              <div className="icon-clock text-[var(--accent-color)]"></div>
              <span>Пн-Вс: 9:00-20:00</span>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4">
            <p className="text-sm opacity-75">
              © 2025 GreenGarden. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}