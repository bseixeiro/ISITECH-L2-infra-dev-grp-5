import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { ConnexionPage } from "./components/ConnexionPage";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <>
      <Navbar
        onSearchChange={(e) => setSearchInputValue(e.target.value)}
        searchValue={searchInputValue}
      ></Navbar>
      <ConnexionPage test=""></ConnexionPage>
    </>
  );
}

export default App;
