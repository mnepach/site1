function Varieties() {
  try {
    const varieties = [
      {
        name: "\"Черный жемчуг\" – эталонный сорт с крупными ягодами (до 20 мм) и стабильной урожайностью.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMierJHLHxBfvhLnTZ-cOuVJDV5lPrXRYScA&s"
      },
      {
        name: "\"Добрыня\" – среднепоздний сорт (середина июля) с высокой морозостойкостью.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMierJHLHxBfvhLnTZ-cOuVJDV5lPrXRYScA&s"
      },
      {
        name: "\"Селеченская-2\" – поздний сорт (конец августа) с рекордной урожайностью (до 5 кг).",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMierJHLHxBfvhLnTZ-cOuVJDV5lPrXRYScA&s"
      },
      {
        name: "\"Экзотика\" – удивляет очень сладкой ягодой и размером ягоды.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMierJHLHxBfvhLnTZ-cOuVJDV5lPrXRYScA&s"
      },
      {
        name: "\"Ядреная\" – неприхотливый и очень урожайный сорт (до 4 кг).",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMierJHLHxBfvhLnTZ-cOuVJDV5lPrXRYScA&s"
      },
      {
        name: "\"Пигмей\" – отличная лежкость ягоды, также отличается своей декоративностью.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMierJHLHxBfvhLnTZ-cOuVJDV5lPrXRYScA&s"
      }
    ];

    return (
      <section className="px-4 py-8" data-name="varieties" data-file="components/Varieties.js">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-[var(--text-dark)] mb-2">
            СОРТА:
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {varieties.map((variety, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 rounded-xl overflow-hidden mx-auto mb-2">
                <img 
                  src={variety.image} 
                  alt="Смородина"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[var(--text-dark)] text-xs leading-relaxed font-medium px-1">
                {variety.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <a href="#order" className="btn-primary max-w-xs mx-auto">
            Оформить заказ
          </a>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Varieties component error:', error);
    return null;
  }
}