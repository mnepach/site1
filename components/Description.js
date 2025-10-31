function Description() {
  try {
    return (
      <section
        className="px-4 py-12 bg-gradient-to-b from-[var(--secondary-color)] to-white relative z-10"
        data-name="description"
        data-file="components/Description.js"
      >

        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-[var(--text-dark)] mb-2">
            Описание
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-[var(--border-color)] transition-transform hover:scale-[1.02] duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="icon-star text-2xl text-[var(--accent-color)]"></div>
              <h3 className="text-lg font-semibold text-[var(--text-dark)]">
                Идеальный выбор для вашего сада
              </h3>
            </div>
            <p className="text-[var(--text-dark)] leading-relaxed text-sm mb-4">
              Мечтаете о собственной плантации полезных и вкусных ягод? Наши саженцы смородины шести лучших сортов – это идеальное решение для вашего участка!
            </p>
            
            <div className="relative rounded-lg overflow-hidden my-4 shadow-md">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMierJHLHxBfvhLnTZ-cOuVJDV5lPrXRYScA&s"
                alt="Смородина крупные ягоды"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                Крупные ягоды до 20 мм
              </div>
            </div>

            <p className="text-[var(--text-dark)] leading-relaxed text-sm mb-4">
              <span className="font-semibold text-[var(--accent-color)]">
                "Черный жемчуг", "Добрыня", "Селеченская-2", "Экзотика", "Ядреная", "Пигмей"
              </span>{" "}
              – каждый сорт отличается высокой урожайностью (3-5 кг с куста) и отличной морозостойкостью (до -35°C).
            </p>

            <div className="relative rounded-lg overflow-hidden my-4 shadow-md">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMierJHLHxBfvhLnTZ-cOuVJDV5lPrXRYScA&s"
                alt="Польза для здоровья"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                Богаты витаминами и антиоксидантами
              </div>
            </div>

            <p className="text-[var(--text-dark)] leading-relaxed text-sm">
              Все саженцы адаптированы к условиям Беларуси и начинают плодоносить уже на следующий год после посадки.
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
                <li className="flex items-center">
                  <div className="icon-check text-[var(--accent-color)] mr-2"></div>
                  Сорта: Черный жемчуг, Добрыня, Селеченская-2, Экзотика, Ядреная, Пигмей
                </li>
                <li className="flex items-center">
                  <div className="icon-check text-[var(--accent-color)] mr-2"></div>
                  Урожайность: 3-5 кг с куста
                </li>
                <li className="flex items-center">
                  <div className="icon-check text-[var(--accent-color)] mr-2"></div>
                  Размер ягод: 15-20 мм
                </li>
                <li className="flex items-center">
                  <div className="icon-check text-[var(--accent-color)] mr-2"></div>
                  Сроки созревания: июль-август
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="icon-check text-[var(--accent-color)] mr-2"></div>
                  Морозостойкость: до -35°C
                </li>
                <li className="flex items-center">
                  <div className="icon-check text-[var(--accent-color)] mr-2"></div>
                  Лежкость: до 10-14 дней
                </li>
                <li className="flex items-center">
                  <div className="icon-check text-[var(--accent-color)] mr-2"></div>
                  Плодоношение: на следующий год
                </li>
                <li className="flex items-center">
                  <div className="icon-check text-[var(--accent-color)] mr-2"></div>
                  Доставка: по всей РБ, ЗКС
                </li>
              </ul>
            </div>
            <div className="mt-4 bg-[var(--accent-color)] text-white text-sm px-4 py-2 rounded-full text-center font-medium shadow-md">
              🎁 Акция: Купи 3 саженца – 4-й в подарок!
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="#order"
            className="btn-primary inline-flex items-center space-x-2 px-6 py-3 rounded-full text-white bg-[var(--primary-color)] hover:bg-[var(--accent-color)] transition-colors duration-300 shadow-lg"
          >
            <span>Заказать сейчас</span>
            <div className="icon-arrow-right text-sm"></div>
          </a>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Description component error:', error);
    return null;
  }
}