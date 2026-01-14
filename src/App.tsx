import Navigation from "./components/Navigation.tsx";
import Hero from "./components/Hero";
import Lore from "./components/Lore";
import MemeGallery from "./components/MemeGallery.tsx";
import ContractAddress from "./components/ContractAddress.tsx";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Lore />
      <MemeGallery />
      {/* <ContractAddress /> */}
      <Footer />
    </div>
  );
}

export default App;
