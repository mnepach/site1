function Hero() {
  try {
    return (
      <section className="px-4 py-3 relative z-10" data-name="hero" data-file="components/Hero.js">
        <div className="text-center mb-3">
          <div className="inline-block bg-[var(--accent-color)] text-white text-xs px-2 py-1 rounded mb-2">
            🎉 Акция
          </div>
          
          <h1 className="text-lg font-bold text-[var(--text-dark)] mb-2">
            Саженцы смородины{' '}
            <span className="text-[var(--accent-color)]">3-х летка</span>
          </h1>
          
          <p className="text-[var(--text-light)] text-xs mb-2">
            Урожайность до 5 кг с куста • Морозостойкость -35°С
          </p>
        </div>

        <div className="relative rounded-lg overflow-hidden mb-3 shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=180&fit=crop&crop=center" 
            alt="Саженцы кустарников" 
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-2 left-2 text-white">
            <div className="text-[10px] opacity-90">Цена за 2 шт:</div>
            <div className="text-base font-bold">49,99 BYN</div>
          </div>
          <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded">
            +1 в подарок
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1 mb-3">
          <div className="text-center">
            <div className="w-8 h-8 rounded bg-[var(--secondary-color)] mx-auto mb-1 flex items-center justify-center">
              <div className="icon-shield-check text-sm text-[var(--primary-color)]"></div>
            </div>
            <p className="text-[10px] text-[var(--text-light)]">Гарантия</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 rounded bg-[var(--secondary-color)] mx-auto mb-1 flex items-center justify-center">
              <div className="icon-truck text-sm text-[var(--primary-color)]"></div>
            </div>
            <p className="text-[10px] text-[var(--text-light)]">Доставка</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 rounded bg-[var(--secondary-color)] mx-auto mb-1 flex items-center justify-center">
              <div className="icon-heart text-sm text-[var(--primary-color)]"></div>
            </div>
            <p className="text-[10px] text-[var(--text-light)]">Поддержка</p>
          </div>
        </div>

        <div className="mb-3 space-y-2">
          <div className="bg-gray-50 rounded-lg p-2">
            <div className="text-[10px] text-gray-500 line-through">Обычно 80 BYN</div>
            <div className="text-sm font-bold text-[var(--primary-color)]">2 шт = 49,99 BYN</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-2 border border-orange-200">
            <div className="text-[10px] text-gray-500 line-through">Обычно 120 BYN</div>
            <div className="text-sm font-bold text-[var(--accent-color)]">3+1 = 74,99 BYN</div>
          </div>
        </div>

        <a href="#order" className="btn-primary block text-center py-2.5 text-sm font-medium rounded-lg">
          Заказать саженцы
        </a>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}