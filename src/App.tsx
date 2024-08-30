import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <>
      <Navbar
        onSearchChange={(e) => setSearchInputValue(e.target.value)}
        searchValue={searchInputValue}
      ></Navbar>
      <div className="flex flex-col min-h-screen">
        {/* Autres composants de l'application */}
        <div className="flex-grow">
          {/* Contenu principal de l'application */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
