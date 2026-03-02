function Description() {
  return (
    <section className="px-4 py-12 bg-gradient-to-b from-[var(--secondary-color)] to-white relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl lg:text-3xl font-bold text-[var(--text-dark)]">
            Описание
          </h2>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8 space-y-6 lg:space-y-0">
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-[var(--border-color)] transition-transform hover:scale-[1.02] duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="icon-star text-2xl text-[var(--accent-color)]"></div>
              <h3 className="text-lg font-semibold text-[var(--text-dark)]">
                Идеальный выбор для вашего сада
              </h3>
            </div>

            <p className="text-sm text-[var(--text-dark)] leading-relaxed mb-4">
              Мечтаете о собственной плантации полезных и вкусных ягод? Наши саженцы смородины шести лучших сортов — идеальное решение для вашего участка.
            </p>

            <div className="relative rounded-lg overflow-hidden my-4 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&h=300&fit=crop&q=80"
                alt="Смородина крупные ягоды"
                className="w-full h-48 lg:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                Крупные ягоды до 20 мм
              </div>
            </div>

            <p className="text-sm text-[var(--text-dark)] leading-relaxed mb-4">
              <span className="font-semibold text-[var(--accent-color)]">
                Черный жемчуг, Добрыня, Селеченская-2, Экзотика, Ядреная, Пигмей
              </span>{" "}
              — высокая урожайность (3–5 кг с куста) и морозостойкость до −35°C.
            </p>

            <div className="relative rounded-lg overflow-hidden my-4 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1597714026720-8f74c62310ba?w=600&h=300&fit=crop&q=80"
                alt="Польза для здоровья"
                className="w-full h-48 lg:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                Богаты витаминами и антиоксидантами
              </div>
            </div>

            <p className="text-sm text-[var(--text-dark)] leading-relaxed">
              Саженцы адаптированы к условиям Беларуси и начинают плодоносить уже на следующий год после посадки.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-[var(--border-color)] transition-transform hover:scale-[1.02] duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="icon-info text-2xl text-[var(--accent-color)]"></div>
              <h3 className="text-lg font-semibold text-[var(--text-dark)]">
                Характеристики саженцев
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2">
                {[
                  "Сорта: Черный жемчуг, Добрыня, Селеченская-2, Экзотика, Ядреная, Пигмей",
                  "Урожайность: 3–5 кг с куста",
                  "Размер ягод: 15–20 мм",
                  "Сроки созревания: июль–август"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="icon-check text-[var(--accent-color)] mr-2"></div>
                    {item}
                  </li>
                ))}
              </ul>

              <ul className="space-y-2">
                {[
                  "Морозостойкость: до −35°C",
                  "Лежкость: до 10–14 дней",
                  "Плодоношение: на следующий год",
                  "Доставка: по всей РБ, ЗКС"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <div className="icon-check text-[var(--accent-color)] mr-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 bg-[var(--accent-color)] text-white text-sm px-4 py-2 rounded-full text-center font-medium shadow-md">
              🎁 Акция: Купи 3 саженца — 4-й в подарок!
            </div>

            <div className="mt-6 relative rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=320&fit=crop&q=80"
                alt="Сад с ягодными кустарниками"
                className="w-full h-48 lg:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-sm font-semibold">Доставка по всей Беларуси</p>
                <p className="text-xs opacity-80">Оплата при получении</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="#order"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-white bg-[var(--primary-color)] hover:bg-[var(--accent-color)] transition-colors duration-300 shadow-lg"
          >
            <span>Заказать сейчас</span>
            <div className="icon-arrow-right text-sm"></div>
          </a>
        </div>
      </div>
    </section>
  );
}