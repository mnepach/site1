function Navigation() {
  const [bannerVisible, setBannerVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setBannerVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--border-color)]">
      <div className="flex items-center justify-between text-sm px-4 py-3 max-w-6xl mx-auto">
        {[
          { icon: "icon-tag", label: "Цена" },
          { icon: "icon-shopping-cart", label: "Заказ" },
          { icon: "icon-grid", label: "Каталог" },
          { icon: "icon-phone", label: "Контакты" }
        ].map((item, i) => (
          <button key={i} className="flex items-center space-x-1 text-[var(--primary-color)] font-medium">
            <div className={`${item.icon} text-sm`}></div>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div
        style={{
          maxHeight: bannerVisible ? '48px' : '0',
          opacity: bannerVisible ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height .35s cubic-bezier(.4,0,.2,1), opacity .3s ease',
          background: 'linear-gradient(90deg,#2d5016 0%,#4a7c25 100%)',
          borderTop: bannerVisible ? '1px solid rgba(255,255,255,.15)' : 'none'
        }}
      >
        <a
          href="tel:+375291234567"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            padding: '8px 16px',
            textDecoration: 'none',
            color: '#fff'
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '26px',
              height: '26px',
              background: 'rgba(255,255,255,.15)',
              borderRadius: '50%',
              animation: bannerVisible ? 'ringPulseGreen 1.6s ease-in-out infinite' : 'none'
            }}
          >
            📞
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
            <span style={{ fontSize: '11px', opacity: .85 }}>Есть вопросы? Звоните!</span>
            <span style={{ fontSize: '14px', fontWeight: 700 }}>+375 (29) 123-45-67</span>
          </div>

          <span
            style={{
              marginLeft: '6px',
              background: '#7cb518',
              color: '#fff',
              fontSize: '10px',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '20px',
              whiteSpace: 'nowrap'
            }}
          >
            9:00 – 20:00
          </span>
        </a>
      </div>

      <style>{`
        @keyframes ringPulseGreen {
          0%,100% { transform: scale(1); }
          30% { transform: scale(1.18) rotate(-8deg); }
          60% { transform: scale(1.18) rotate(8deg); }
        }
      `}</style>
    </nav>
  );
}