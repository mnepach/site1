function Hero() {
  return (
    <section className="px-4 py-3 relative z-10 max-w-6xl mx-auto" data-name="hero" data-file="components/Hero.js">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div>
          <div className="text-center lg:text-left mb-3">
            <div className="inline-block bg-[var(--accent-color)] text-white text-xs px-2 py-1 rounded mb-2">
              🎉 Акция
            </div>
            <h1 className="text-lg lg:text-4xl font-bold text-[var(--text-dark)] mb-2">
              Саженцы смородины{' '}
              <span className="text-[var(--accent-color)]">3-х летка</span>
            </h1>
            <p className="text-[var(--text-light)] text-xs lg:text-base mb-2">
              Урожайность до 5 кг с куста • Морозостойкость -35°С
            </p>
          </div>

          <div className="relative rounded-lg overflow-hidden mb-3 shadow-md lg:hidden">
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

          <div className="grid grid-cols-3 gap-1 mb-3 lg:gap-4">
            <div className="text-center">
              <div className="w-8 h-8 lg:w-12 lg:h-12 rounded lg:rounded-xl bg-[var(--secondary-color)] mx-auto mb-1 flex items-center justify-center">
                <div className="icon-shield-check text-sm lg:text-xl text-[var(--primary-color)]"></div>
              </div>
              <p className="text-[10px] lg:text-sm text-[var(--text-light)]">Гарантия</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 lg:w-12 lg:h-12 rounded lg:rounded-xl bg-[var(--secondary-color)] mx-auto mb-1 flex items-center justify-center">
                <div className="icon-truck text-sm lg:text-xl text-[var(--primary-color)]"></div>
              </div>
              <p className="text-[10px] lg:text-sm text-[var(--text-light)]">Доставка</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 lg:w-12 lg:h-12 rounded lg:rounded-xl bg-[var(--secondary-color)] mx-auto mb-1 flex items-center justify-center">
                <div className="icon-heart text-sm lg:text-xl text-[var(--primary-color)]"></div>
              </div>
              <p className="text-[10px] lg:text-sm text-[var(--text-light)]">Поддержка</p>
            </div>
          </div>

          <div className="mb-3 space-y-2">
            <div className="bg-gray-50 rounded-lg p-2 lg:p-4">
              <div className="text-[10px] lg:text-sm text-gray-500 line-through">Обычно 80 BYN</div>
              <div className="text-sm lg:text-xl font-bold text-[var(--primary-color)]">2 шт = 49,99 BYN</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-2 lg:p-4 border border-orange-200">
              <div className="text-[10px] lg:text-sm text-gray-500 line-through">Обычно 120 BYN</div>
              <div className="text-sm lg:text-xl font-bold text-[var(--accent-color)]">3+1 = 74,99 BYN</div>
            </div>
          </div>

          <a href="#order" className="btn-primary block text-center py-2.5 lg:py-4 text-sm lg:text-base font-medium rounded-lg">
            Заказать саженцы
          </a>
        </div>

        <div className="hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop&crop=center&q=85"
              alt="Саженцы кустарников"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-sm opacity-90">Акция — 3+1 в подарок!</div>
              <div className="text-2xl font-bold">74,99 BYN за 4 шт.</div>
            </div>
            <div className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
              +1 в подарок
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}