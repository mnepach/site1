function Features() {
  try {
    const features = [
      {
        icon: "leaf",
        title: "100% приживаемость", 
        description: "Гарантируем, что саженцы приживутся или заменим бесплатно"
      },
      {
        icon: "snowflake",
        title: "Морозостойкие сорта",
        description: "Все растения адаптированы к климату Беларуси"
      },
      {
        icon: "package",
        title: "Бережная упаковка",
        description: "Специальная упаковка сохраняет корневую систему"
      },
      {
        icon: "headphones",
        title: "Консультации садовода",
        description: "Поможем с выбором и дадим советы по уходу"
      }
    ];

    return (
      <section className="px-4 py-12" data-name="features" data-file="components/Features.js">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-3">
            Почему выбирают нас?
          </h2>
        </div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0">
                <div className={`icon-${feature.icon} text-lg text-white`}></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-dark)] mb-1">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-light)]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}