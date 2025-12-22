function OrderForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    quantity: '2',
    agreed: false
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showErrorModal, setShowErrorModal] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  
  try {
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (!formData.name || !formData.phone) {
        setErrorMessage('Пожалуйста, заполните все поля');
        setShowErrorModal(true);
        return;
      }
      
      if (!formData.agreed) {
        setErrorMessage('Необходимо согласиться с политикой конфиденциальности');
        setShowErrorModal(true);
        return;
      }
      
      setIsSubmitting(true);
      
      try {
        const response = await fetch('sendCPA.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            name: formData.name,
            phone: formData.phone,
            quantity: formData.quantity
          })
        });
        
        const data = await response.json();
        
        if (data.success) {
          window.location.href = 'good.html';
        } else {
          setErrorMessage('Произошла ошибка при оформлении заказа. Попробуйте еще раз.');
          setShowErrorModal(true);
          setIsSubmitting(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage('Произошла ошибка при отправке заказа. Проверьте соединение с интернетом.');
        setShowErrorModal(true);
        setIsSubmitting(false);
      }
    };

    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    };

    const closeErrorModal = () => {
      setShowErrorModal(false);
      setErrorMessage('');
    };

    return (
      <>
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
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6 text-[var(--text-dark)]">Оформить заказ</h3>
              
            <div>
              <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                Ваше имя
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-2xl border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent"
              >
                <option value="1">1 саженец</option>
                <option value="2">2 саженца (49.99 BYN)</option>
                <option value="3">3 саженца</option>
                <option value="3+1">4 саженца (3+1 в подарок - 74.99 BYN)</option>
                <option value="5+">Более 4 саженцев</option>
              </select>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agreed"
                id="agreed"
                checked={formData.agreed}
                onChange={handleInputChange}
                className="mt-1 w-5 h-5 rounded border-[var(--border-color)] text-[var(--accent-color)] focus:ring-[var(--accent-color)]"
              />
              <label htmlFor="agreed" className="text-xs sm:text-sm text-[var(--text-light)]">
                Я согласен с <a href="politics.html" className="text-[var(--accent-color)] hover:underline" target="_blank">политикой конфиденциальности</a> и <a href="oferta.html" className="text-[var(--accent-color)] hover:underline" target="_blank">пользовательским соглашением</a>
              </label>
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

            <button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.phone || !formData.agreed}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Отправляем заказ...
                </span>
              ) : (
                'Оформить заказ'
              )}
            </button>

            <p className="text-xs text-[var(--text-light)] text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </section>

        {showErrorModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={closeErrorModal}>
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-dark)] mb-2">Ошибка</h3>
                <p className="text-[var(--text-light)] mb-6">{errorMessage}</p>
                <button
                  onClick={closeErrorModal}
                  className="w-full px-6 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-all shadow-lg"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  } catch (error) {
    console.error('OrderForm component error:', error);
    return null;
  }
}