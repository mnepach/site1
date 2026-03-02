function CartDrawer() {
  const {
    cartItems, removeFromCart, updateQuantity,
    totalPrice, totalDiscount, totalCount,
    calcPaidQty, nextFreeIn,
    isCartOpen, setIsCartOpen, clearCart,
    showCatalogSuggestion, setShowCatalogSuggestion
  } = React.useContext(CartContext);

  if (!isCartOpen) return null;

  const handleGoToCatalog = () => {
    setShowCatalogSuggestion(false);
    setIsCartOpen(false);
    setTimeout(() => {
      const el = document.getElementById('catalog');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => { setIsCartOpen(false); setShowCatalogSuggestion(false); }}
      />

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl max-h-[85vh] flex flex-col"
           data-name="cart-drawer" data-file="components/CartDrawer.js">

        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border-color)]">
          <div className="flex items-center space-x-2">
            <div className="icon-shopping-cart text-xl text-[var(--primary-color)]"></div>
            <h2 className="text-lg font-bold text-[var(--text-dark)]">Корзина</h2>
            {totalCount > 0 && (
              <span className="bg-[var(--accent-color)] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalCount}
              </span>
            )}
          </div>
          <button onClick={() => { setIsCartOpen(false); setShowCatalogSuggestion(false); }}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <div className="icon-x text-gray-500 text-sm"></div>
          </button>
        </div>

        {/* Catalog suggestion */}
        {showCatalogSuggestion && cartItems.length > 0 && (
          <div className="mx-4 mt-3 bg-[var(--secondary-color)] border border-[var(--accent-color)] rounded-2xl p-3">
            <div className="flex items-start space-x-2">
              <span className="text-lg flex-shrink-0">🌿</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[var(--text-dark)]">Дополните корзину!</p>
                <p className="text-xs text-[var(--text-light)] mt-0.5">У нас есть крыжовник и малина — отличное дополнение к смородине.</p>
              </div>
            </div>
            <div className="flex space-x-2 mt-2">
              <button
                onClick={handleGoToCatalog}
                className="flex-1 py-2 rounded-xl bg-[var(--primary-color)] text-white text-xs font-semibold"
              >
                Смотреть каталог
              </button>
              <button
                onClick={() => setShowCatalogSuggestion(false)}
                className="px-4 py-2 rounded-xl border border-[var(--border-color)] text-xs text-[var(--text-light)]"
              >
                Не сейчас
              </button>
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="icon-shopping-cart text-5xl text-gray-200 mb-4 block mx-auto"></div>
              <p className="text-[var(--text-light)] text-sm">Корзина пуста</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 text-[var(--accent-color)] text-sm font-medium underline"
              >
                Выбрать саженцы
              </button>
            </div>
          ) : (
            cartItems.map(item => {
              const freeQty = Math.floor(item.quantity / 4);
              const paidQty = calcPaidQty(item.quantity);
              const toNext = nextFreeIn(item.quantity);
              const itemTotal = paidQty * item.price;

              return (
                <div key={item.name} className="bg-[var(--secondary-color)] rounded-2xl overflow-hidden">
                  <div className="flex items-center space-x-3 p-3">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[var(--text-dark)] truncate">{item.name}</p>
                      <div className="flex items-center space-x-1 mt-0.5">
                        <p className="text-[var(--primary-color)] font-bold text-sm">{itemTotal.toFixed(2)} BYN</p>
                        {freeQty > 0 && (
                          <span className="text-[10px] text-gray-400 line-through">
                            {(item.quantity * item.price).toFixed(2)}
                          </span>
                        )}
                      </div>
                      {freeQty > 0 && (
                        <span className="inline-block text-[10px] bg-green-100 text-green-700 font-semibold px-1.5 py-0.5 rounded-full mt-0.5">
                          🎁 {freeQty} шт бесплатно!
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                      <div className="flex items-center space-x-1 bg-white rounded-xl border border-[var(--border-color)]">
                        <button
                          onClick={() => updateQuantity(item.name, -1)}
                          className="w-7 h-7 flex items-center justify-center text-[var(--primary-color)] font-bold text-lg hover:bg-gray-100 rounded-l-xl"
                        >−</button>
                        <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.name, 1)}
                          className="w-7 h-7 flex items-center justify-center text-[var(--primary-color)] font-bold text-lg hover:bg-gray-100 rounded-r-xl"
                        >+</button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="text-xs text-red-400 hover:text-red-600"
                      >
                        удалить
                      </button>
                    </div>
                  </div>

                  {/* Подсказка "ещё N до бесплатного" */}
                  {toNext < 4 && (
                    <div className="mx-3 mb-3">
                      <div className="bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 flex items-center justify-between">
                        <span className="text-xs text-amber-700">
                          🎁 Ещё <b>{toNext}</b> шт — и одна достанется бесплатно!
                        </span>
                        <button
                          onClick={() => updateQuantity(item.name, toNext)}
                          className="text-[10px] font-semibold bg-amber-400 text-white px-2 py-1 rounded-lg ml-2 flex-shrink-0"
                        >
                          +{toNext}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-5 py-4 border-t border-[var(--border-color)] space-y-2">
            {totalDiscount > 0 && (
              <div className="flex justify-between items-center text-sm">
                <span className="text-green-600 font-medium">🎁 Скидка по акции:</span>
                <span className="text-green-600 font-bold">−{totalDiscount.toFixed(2)} BYN</span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-[var(--text-light)] text-sm">Итого ({totalCount} шт.):</span>
              <span className="text-xl font-bold text-[var(--primary-color)]">{totalPrice.toFixed(2)} BYN</span>
            </div>
            <div className="flex space-x-3 pt-1">
              <button
                onClick={() => clearCart()}
                className="flex-1 py-3 rounded-2xl border border-[var(--border-color)] text-[var(--text-light)] text-sm font-medium"
              >
                Очистить
              </button>
              <a
                href="#order"
                onClick={() => { setIsCartOpen(false); setShowCatalogSuggestion(false); }}
                className="flex-2 flex-grow-[2] py-3 rounded-2xl bg-[var(--primary-color)] text-white text-sm font-medium text-center"
              >
                Оформить заказ →
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}