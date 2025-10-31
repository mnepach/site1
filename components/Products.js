function Products() {
  try {
    const products = [
      {
        name: "Смородина черная",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1721117839465-604a3c54ceb3?auto=format&fit=crop&w=400&q=80",
        features: ["Морозостойкость до -35°C", "Урожайность 3-5 кг", "Крупные ягоды"],
        isPopular: true
      },
      {
        name: "Крыжовник зеленый",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1622576454339-3cf6e5e9d44a?auto=format&fit=crop&w=400&q=80",
        features: ["Устойчив к болезням", "Сладкие плоды", "Декоративный вид"]
      },
      {
        name: "Малина ремонтантная",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1593461802389-d57d73a36913?auto=format&fit=crop&w=400&q=80",
        features: ["Плодоносит 2 раза в год", "Крупные ягоды", "Неприхотлива в уходе"]
      }
    ];

    return (
      <section className="px-4 py-12 bg-[var(--secondary-color)]" data-name="products" data-file="components/Products.js">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-3">
            Наши саженцы
          </h2>
          <p className="text-[var(--text-light)]">
            Качественные кустарники для вашего сада
          </p>
        </div>

        <div className="space-y-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 text-sm text-[var(--text-light)] bg-white px-4 py-3 rounded-2xl border border-[var(--border-color)]">
            <div className="icon-clock text-[var(--accent-color)]"></div>
            <span>Акция действует до конца месяца</span>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Products component error:', error);
    return null;
  }
}