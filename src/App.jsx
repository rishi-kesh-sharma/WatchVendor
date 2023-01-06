import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer.jsx";
import Reviews from "./components/Reviews.jsx";
function App() {
  return (
    <div className="App relative w-[100vw] overflow-hidden  bg-[url(homebackground.png)]  bg-contain bg-no-repeat  ">
      <Navbar />
      <Home />
      <Products />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
