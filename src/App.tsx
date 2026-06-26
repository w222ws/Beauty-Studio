import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 antialiased font-sans">
      <Header />
      <main className="pt-20">
        <Hero />
        <Services />
      </main>
    </div>
  );
}

export default App;
