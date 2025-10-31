function ProductCard({ name, price, image, features, isPopular = false }) {
  try {
    const priceForFour = (price * 3).toFixed(2); // Цена за 4 штуки (акция 3+1)

    return (
      <div className={`card relative ${isPopular ? 'ring-2 ring-[var(--accent-color)] ring-opacity-50' : ''}`} data-name="product-card" data-file="components/ProductCard.js">
        {isPopular && (
          <div className="absolute -top-3 left-4 bg-[var(--accent-color)] text-white text-sm px-3 py-1 rounded-full">
            Популярный
          </div>
        )}
        
        <div className="relative rounded-2xl overflow-hidden mb-4">
          <img src={image} alt={name} className="w-full h-40 object-cover" />
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Действует акция
          </div>
        </div>

        <h3 className="text-lg font-semibold text-[var(--text-dark)] mb-2">{name}</h3>
        
        <div className="flex items-baseline space-x-2 mb-3 flex-nowrap price-container">
          <span className="text-xl font-bold text-[var(--primary-color)]">{price} BYN</span>
          <span className="text-xl font-bold text-red-500 relative">
            | {priceForFour} BYN <span className="text-xs">(за 4 шт.)</span>
          </span>
        </div>

        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-[var(--text-light)]">
              <div className="icon-check text-sm text-[var(--accent-color)] mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>

        <button className="btn-primary">
          Добавить в корзину
        </button>
      </div>
    );
  } catch (error) {
    console.error('ProductCard component error:', error);
    return null;
  }
}