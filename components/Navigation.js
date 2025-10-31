function Navigation() {
  try {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--border-color)] px-4 py-3" data-name="navigation" data-file="components/Navigation.js">
        <div className="flex items-center justify-between text-sm">
          <button className="flex items-center space-x-1 text-[var(--primary-color)] font-medium">
            <div className="icon-tag text-sm"></div>
            <span>Цена</span>
          </button>
          
          <button className="flex items-center space-x-1 text-[var(--primary-color)] font-medium">
            <div className="icon-shopping-cart text-sm"></div>
            <span>Заказ</span>
          </button>
          
          <button className="flex items-center space-x-1 text-[var(--primary-color)] font-medium">
            <div className="icon-grid text-sm"></div>
            <span>Каталог</span>
          </button>
          
          <button className="flex items-center space-x-1 text-[var(--primary-color)] font-medium">
            <div className="icon-phone text-sm"></div>
            <span>Контакты</span>
          </button>
        </div>
      </nav>
    );
  } catch (error) {
    console.error('Navigation component error:', error);
    return null;
  }
}