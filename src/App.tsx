import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { ButtonNo } from "./components/ButtonNo";
import { ButtonSeen } from "./components/ButtonSeen";
import { ButtonWatchlist } from "./components/ButtonWatchlist";
import { HomeCard } from "./components/homeCard";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <>
      <Navbar
        onSearchChange={(e) => setSearchInputValue(e.target.value)}
        searchValue={searchInputValue}
      ></Navbar>
      <div className="bg-stone-900 h-screen w-screen flex flex-col justify-evenly">
        <div className="flex justify-evenly items-center">
          <ButtonNo />
          <HomeCard />
          <ButtonSeen />
        </div>
        <ButtonWatchlist />
      </div>
    </>
  );
}

export default App;
