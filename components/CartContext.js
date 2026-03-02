// CartContext - глобальное состояние корзины
const CartContext = React.createContext(null);

// Ключ для localStorage
const STORAGE_KEY = 'greengarden_cart';

function CartProvider({ children }) {
  // Инициализируем из localStorage при первом рендере
  const [cartItems, setCartItems] = React.useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [showCatalogSuggestion, setShowCatalogSuggestion] = React.useState(false);
  const cartOpenedOnce = React.useRef(false);

  // сохранение
  React.useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {}
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.name === product.name);
      if (existing) {
        return prev.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    if (!cartOpenedOnce.current) {
      cartOpenedOnce.current = true;
      setShowCatalogSuggestion(true);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (name) => {
    setCartItems(prev => prev.filter(item => item.name !== name));
  };

  const updateQuantity = (name, delta) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.name === name
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => setCartItems([]);

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Акция: каждый 4-й саженец одного вида — бесплатно
  const calcPaidQty = (qty) => qty - Math.floor(qty / 4);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + calcPaidQty(item.quantity) * item.price,
    0
  );

  const totalDiscount = cartItems.reduce(
    (sum, item) => sum + Math.floor(item.quantity / 4) * item.price,
    0
  );

  // Сколько нужно до следующей бесплатной штуки
  const nextFreeIn = (qty) => 4 - (qty % 4 === 0 ? 4 : qty % 4);

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeFromCart, updateQuantity,
      clearCart, totalCount, totalPrice, totalDiscount,
      calcPaidQty, nextFreeIn,
      isCartOpen, setIsCartOpen,
      showCatalogSuggestion, setShowCatalogSuggestion
    }}>
      {children}
    </CartContext.Provider>
  );
}