import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 antialiased font-sans">
      <Header />
      <main className="pt-20">
        <Hero />
        <Services />
        <Portfolio />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}

export default App;
// додаток
