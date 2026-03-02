function ProductCard({ name, price, image, features, isPopular = false }) {
  try {
    const { addToCart, cartItems } = React.useContext(CartContext);
    const itemInCart = cartItems.find(item => item.name === name);
    const priceForFour = (price * 3).toFixed(2);

    const handleAddToCart = () => {
      addToCart({ name, price, image, features });
    };

    return (
      <div className={`card relative ${isPopular ? 'ring-2 ring-[var(--accent-color)] ring-opacity-50' : ''}`}
           data-name="product-card" data-file="components/ProductCard.js">
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

        <div className="flex items-baseline space-x-2 mb-3 flex-nowrap">
          <span className="text-xl font-bold text-[var(--primary-color)]">{price} BYN</span>
          <span className="text-sm font-bold text-red-500">
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

        {itemInCart ? (
          <div className="flex items-center justify-between bg-[var(--secondary-color)] rounded-2xl p-3 border border-[var(--accent-color)]">
            <span className="text-sm font-semibold text-[var(--primary-color)]">
              В корзине: {itemInCart.quantity} шт.
            </span>
            <button
              onClick={handleAddToCart}
              className="bg-[var(--primary-color)] text-white text-sm px-4 py-2 rounded-xl font-medium hover:bg-[var(--accent-color)] transition-colors"
            >
              + Ещё
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="btn-primary flex items-center justify-center space-x-2"
          >
            <div className="icon-shopping-cart text-sm"></div>
            <span>Добавить в корзину</span>
          </button>
        )}
      </div>
    );
  } catch (error) {
    console.error('ProductCard component error:', error);
    return null;
  }
}