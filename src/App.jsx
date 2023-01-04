import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer.jsx";
import Reviews from "./components/Review.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Products />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
