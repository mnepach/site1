function Reviews() {
  const [reviews] = React.useState([
    {
      id: 1,
      name: "Татьяна М.",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=80&q=80",
      text: "Заказала 4 куста по акции 3+1. Все саженцы приехали здоровыми, корни свежие, упакованы отлично. Посадила в начале мая, все прижились! Уже через месяц видно, как тронулись в рост. Очень довольна!",
      product: "Смородина черная (4 шт, акция 3+1)",
      rating: 5,
      photos: [
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=300&q=80"
      ]
    },
    {
      id: 2,
      name: "Николай В.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
      text: "Брал сорта Черный жемчуг и Добрыня. Консультант по телефону помог выбрать под мой участок — очень грамотно всё объяснил. Доставка Белпочтой пришла на 3-й день. Рекомендую!",
      product: "Черный жемчуг + Добрыня",
      rating: 5,
      photos: [
        "https://images.unsplash.com/photo-1597714026720-8f74c62310ba?auto=format&fit=crop&w=300&q=80",
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=300&q=80"
      ]
    },
    {
      id: 3,
      name: "Светлана К.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80",
      text: "Третий год как посадила Ядреную и Селеченскую-2. Урожай в прошлом году был просто огромный — ведро с куста! Ягоды крупные, сладкие. Зимой перенесли морозы без укрытия. Буду заказывать ещё.",
      product: "Ядреная + Селеченская-2",
      rating: 5,
      photos: [
        "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=300&q=80"
      ]
    },
    {
      id: 4,
      name: "Андрей П.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80",
      text: "Заказывал для мамы на дачу — взяли 2 куста смородины и крыжовник. Оформили быстро, менеджер перезвонил сам, уточнил адрес. Цена честная, саженцы качественные. Мама очень рада!",
      product: "Смородина + Крыжовник",
      rating: 5,
      photos: []
    },
    {
      id: 5,
      name: "Ирина Д.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80",
      text: "Сорт Экзотика — просто восторг! Ягоды невероятно крупные и сладкие. В этом году плодоносит второй год подряд. Всем соседям уже посоветовала ваш магазин. Спасибо за качество!",
      product: "Экзотика × 2",
      rating: 5,
      photos: [
        "https://images.unsplash.com/photo-1599940778173-e276d4acb2bb?auto=format&fit=crop&w=300&q=80"
      ]
    }
  ]);

  const [current, setCurrent] = React.useState(0);
  const [formOpen, setFormOpen] = React.useState(false);
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [formName, setFormName] = React.useState('');
  const [formText, setFormText] = React.useState('');
  const [formFiles, setFormFiles] = React.useState([]);
  const [formPreviews, setFormPreviews] = React.useState([]);
  const [formError, setFormError] = React.useState('');
  const [lightbox, setLightbox] = React.useState(null);
  const startXRef = React.useRef(null);

  const total = reviews.length;
  const prev = () => setCurrent(c => (c - 1 + total) % total);
  const next = () => setCurrent(c => (c + 1) % total);

  const handleTouchStart = (e) => { startXRef.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (startXRef.current === null) return;
    const diff = startXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    startXRef.current = null;
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormFiles(files);
    setFormPreviews(files.map(f => URL.createObjectURL(f)));
  };

  const handleSubmit = () => {
    if (!formName.trim() || !formText.trim()) {
      setFormError('Пожалуйста, заполните имя и отзыв');
      return;
    }
    setFormError('');
    setFormOpen(false);
    setSuccessOpen(true);
    setFormName('');
    setFormText('');
    setFormFiles([]);
    setFormPreviews([]);
    setTimeout(() => setSuccessOpen(false), 3500);
  };

  const closeForm = () => {
    setFormOpen(false);
    setFormName('');
    setFormText('');
    setFormFiles([]);
    setFormPreviews([]);
    setFormError('');
  };

  const review = reviews[current];

  return (
    <section className="px-4 py-12 bg-[var(--secondary-color)]" data-name="reviews">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--text-dark)] mb-3">
            Отзывы покупателей
          </h2>
          <p className="text-[var(--text-light)] lg:text-base text-sm">
            Более 500 довольных садоводов по всей Беларуси
          </p>
        </div>

        <div className="max-w-2xl mx-auto" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="bg-white rounded-2xl p-5 lg:p-7 shadow-sm border border-[var(--border-color)]" style={{minHeight: '200px'}}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover flex-shrink-0 border-2 shadow-md"
                style={{borderColor: 'var(--accent-color)'}}
              />
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[var(--text-dark)] text-base">{review.name}</div>
                <div className="flex gap-0.5 my-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-[var(--accent-color)] text-sm">★</span>
                  ))}
                </div>
                <div className="text-xs text-[var(--text-light)] truncate">{review.product}</div>
              </div>
            </div>

            <p className="text-[var(--text-light)] leading-relaxed text-sm lg:text-base mb-4">{review.text}</p>

            {review.photos && review.photos.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {review.photos.map((photo, idx) => (
                  <img
                    key={idx}
                    src={photo}
                    alt="фото"
                    onClick={() => setLightbox(photo)}
                    className="w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-xl border border-[var(--border-color)] cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-sm"
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full text-white flex items-center justify-center text-xl font-bold shadow-md hover:scale-110 transition-all gradient-bg"
            >‹</button>

            <div className="flex gap-2 items-center">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: idx === current ? '20px' : '8px',
                    height: '8px',
                    background: idx === current ? 'var(--accent-color)' : 'var(--border-color)'
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full text-white flex items-center justify-center text-xl font-bold shadow-md hover:scale-110 transition-all gradient-bg"
            >›</button>
          </div>

          <div className="flex justify-center mt-5">
            <button
              onClick={() => setFormOpen(true)}
              className="px-5 py-2.5 border-2 border-[var(--accent-color)] text-[var(--accent-color)] rounded-xl font-medium text-sm hover:bg-[var(--accent-color)] hover:text-white transition-all duration-200"
            >
              ✏️ Оставить отзыв
            </button>
          </div>
        </div>
      </div>

      {formOpen && (
        <div className="fixed inset-0 flex items-center justify-center p-4" style={{zIndex: 60}}>
          <div className="absolute inset-0 bg-black/60" onClick={closeForm}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xl font-bold text-[var(--text-dark)]">Оставить отзыв</h3>
              <button onClick={closeForm} className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors text-xl text-[var(--text-light)]">×</button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Ваше имя</label>
                <input
                  type="text"
                  value={formName}
                  onChange={e => setFormName(e.target.value)}
                  placeholder="Введите имя"
                  className="w-full border-2 border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-dark)] focus:outline-none focus:border-[var(--accent-color)] transition-colors"
                  style={{fontSize: '16px'}}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Ваш отзыв</label>
                <textarea
                  value={formText}
                  onChange={e => setFormText(e.target.value)}
                  placeholder="Расскажите о вашем опыте..."
                  rows={4}
                  className="w-full border-2 border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-dark)] focus:outline-none focus:border-[var(--accent-color)] transition-colors resize-none"
                  style={{fontSize: '16px'}}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-dark)] mb-1">Фото (необязательно)</label>
                <label className="flex items-center gap-3 cursor-pointer border-2 border-dashed border-[var(--border-color)] rounded-xl px-4 py-3 hover:border-[var(--accent-color)] transition-colors">
                  <span className="text-2xl">📷</span>
                  <span className="text-sm text-[var(--text-light)]">
                    {formFiles.length > 0 ? `Выбрано: ${formFiles.length}` : 'Прикрепить фото'}
                  </span>
                  <input type="file" multiple accept="image/*" onChange={handleFileChange} className="hidden" />
                </label>
                {formPreviews.length > 0 && (
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {formPreviews.map((src, i) => (
                      <img key={i} src={src} alt="" className="w-16 h-16 object-cover rounded-lg border border-[var(--border-color)]" />
                    ))}
                  </div>
                )}
              </div>
              {formError && <p className="text-red-500 text-sm">{formError}</p>}
              <button onClick={handleSubmit} className="btn-primary py-3 text-base font-medium">
                Отправить отзыв
              </button>
            </div>
          </div>
        </div>
      )}

      {successOpen && (
        <div className="fixed inset-0 flex items-center justify-center p-4" style={{zIndex: 70}}>
          <div className="absolute inset-0 bg-black/50" onClick={() => setSuccessOpen(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 gradient-bg">
              <span className="text-3xl">🎉</span>
            </div>
            <h3 className="text-xl font-bold text-[var(--text-dark)] mb-2">Спасибо за отзыв!</h3>
            <p className="text-[var(--text-light)] text-sm">Ваш отзыв поможет другим садоводам сделать правильный выбор.</p>
          </div>
        </div>
      )}

      {lightbox && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4 bg-black/85"
          onClick={() => setLightbox(null)}
          style={{zIndex: 80}}
        >
          <img src={lightbox} alt="" className="max-w-full max-h-full rounded-xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}