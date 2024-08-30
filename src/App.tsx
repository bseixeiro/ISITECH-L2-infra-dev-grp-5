import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { ButtonNo } from "./components/ButtonNo";
import { ButtonSeen } from "./components/ButtonSeen";
import { HomeCard } from "./components/homeCard";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <>
      <Navbar
        onSearchChange={(e) => setSearchInputValue(e.target.value)}
        searchValue={searchInputValue}
      ></Navbar>
      <div className="bg-black h-screen w-screen flex justify-evenly items-center">
        <ButtonNo />
        <HomeCard />
        <ButtonSeen />
      </div>
    </>
  );
}

export default App;
