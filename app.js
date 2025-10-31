class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Что-то пошло не так</h1>
            <p className="text-gray-600 mb-4">Извините, произошла неожиданная ошибка.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary max-w-xs mx-auto"
            >
              Перезагрузить страницу
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="min-h-screen bg-white relative overflow-hidden" data-name="app" data-file="app.js">
        <div className="geometric-shape w-32 h-32 bg-[var(--accent-color)] -top-16 -right-16"></div>
        <div className="geometric-shape w-24 h-24 bg-[var(--primary-color)] top-1/3 -left-12"></div>
        <div className="geometric-shape w-20 h-20 bg-[var(--accent-color)] bottom-1/4 -right-10"></div>
        
        <Navigation />
        <Header />
        <Hero />
        <Varieties />
        <Description />
        <Products />
        <Features />
        <OrderForm />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);