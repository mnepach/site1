function Varieties() {
  const varieties = [
    {
      name: '"Черный жемчуг" – эталонный сорт с крупными ягодами (до 20 мм) и стабильной урожайностью.',
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200&h=200&fit=crop&q=80"
    },
    {
      name: '"Добрыня" – среднепоздний сорт (середина июля) с высокой морозостойкостью.',
      image: "https://images.unsplash.com/photo-1597714026720-8f74c62310ba?w=200&h=200&fit=crop&q=80"
    },
    {
      name: '"Селеченская-2" – поздний сорт (конец августа) с рекордной урожайностью (до 5 кг).',
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=200&h=200&fit=crop&q=80"
    },
    {
      name: '"Экзотика" – удивляет очень сладкой ягодой и размером ягоды.',
      image: "https://images.unsplash.com/photo-1599940778173-e276d4acb2bb?w=200&h=200&fit=crop&q=80"
    },
    {
      name: '"Ядреная" – неприхотливый и очень урожайный сорт (до 4 кг).',
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200&h=200&fit=crop&q=80"
    },
    {
      name: '"Пигмей" – отличная лежкость ягоды, также отличается своей декоративностью.',
      image: "https://images.unsplash.com/photo-1597714026720-8f74c62310ba?w=200&h=200&fit=crop&q=80"
    }
  ];

  return (
    <section className="px-4 py-8 max-w-6xl mx-auto" data-name="varieties" data-file="components/Varieties.js">
      <div className="text-center mb-6">
        <h2 className="text-xl lg:text-3xl font-bold text-[var(--text-dark)] mb-2">СОРТА:</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {varieties.map((variety, index) => (
          <div key={index} className="text-center lg:bg-white lg:rounded-2xl lg:p-4 lg:shadow-sm lg:border lg:border-[var(--border-color)] lg:hover:shadow-md transition-all duration-300">
            <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-xl lg:rounded-2xl overflow-hidden mx-auto mb-2">
              <img
                src={variety.image}
                alt="Смородина"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[var(--text-dark)] text-xs lg:text-sm leading-relaxed font-medium px-1">
              {variety.name}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <a href="#order" className="btn-primary max-w-xs mx-auto lg:inline-block lg:w-auto lg:px-10">
          Оформить заказ
        </a>
      </div>
    </section>
  );
}