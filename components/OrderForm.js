function OrderForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    quantity: '1'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      alert('Спасибо за заказ! Наш менеджер свяжется с вами в течение часа.');
    } catch (error) {
      console.error('Order form error:', error);
    }
  };

  const handleChange = (e) => {
    try {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    } catch (error) {
      console.error('Form change error:', error);
    }
  };

  try {
    return (
      <section id="order" className="px-4 py-12 bg-[var(--secondary-color)]" data-name="order-form" data-file="components/OrderForm.js">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-3">
            Оформить заказ
          </h2>
          <p className="text-[var(--text-light)]">
            Заполните форму и мы свяжемся с вами
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
              Ваше имя
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
              placeholder="Введите ваше имя"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
              Телефон
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
              placeholder="+375 (XX) XXX-XX-XX"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
              Количество саженцев
            </label>
            <select
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
            >
              <option value="1">1 саженец</option>
              <option value="2">2 саженца</option>
              <option value="3">3 саженца</option>
              <option value="4">4 саженца (3+1 в подарок)</option>
              <option value="5+">Более 4 саженцев</option>
            </select>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-[var(--border-color)]">
            <div className="flex items-center space-x-3 mb-2">
              <div className="icon-info text-[var(--accent-color)]"></div>
              <h4 className="font-medium text-[var(--text-dark)]">Условия доставки</h4>
            </div>
            <ul className="text-sm text-[var(--text-light)] space-y-1">
              <li>• Доставка по всей Беларуси</li>
              <li>• Оплата при получении</li>
              <li>• Сроки доставки: 2-5 дней</li>
            </ul>
          </div>

          <button type="submit" className="btn-primary">
            Оформить заказ
          </button>

          <p className="text-xs text-[var(--text-light)] text-center">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
          </p>
        </form>
      </section>
    );
  } catch (error) {
    console.error('OrderForm component error:', error);
    return null;
  }
}