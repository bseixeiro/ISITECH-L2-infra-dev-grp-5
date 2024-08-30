import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { WatchList } from "./components/WatchList";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <>
      <Navbar
        onSearchChange={(e) => setSearchInputValue(e.target.value)}
        searchValue={searchInputValue}
      ></Navbar>
      <WatchList />;
    </>
  );
}

export default App;
