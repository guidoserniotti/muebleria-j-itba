import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const cartCount = 0; // Fran lo va a reemplazar por el estado real del carrito

  return (
    <div className="App">
      <Navbar cartCount={cartCount} />
      <main>
        {/* acá va ProductList o ProductDetail */}
      </main>
      <Footer />
    </div>
  );
}

export default App;