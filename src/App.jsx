import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer.jsx";
import Reviews from "./components/Reviews.jsx";
import Cards from "./components/Cards.jsx";
import Video from "./components/Video.jsx";
import Features from "./components/Features.jsx";
function App() {
  return (
    <div className="App relative w-[100vw] overflow-hidden  bg-[url(homebackground.png)]  bg-contain bg-no-repeat  ">
      <Navbar />
      <Home />
      <Cards />
      <Products />
      <Video />
      <Features />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
