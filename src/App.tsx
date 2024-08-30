import { ButtonNo } from "./components/ButtonNo";
import { ButtonSeen } from "./components/ButtonSeen"
import { ButtonWatchlist } from "./components/ButtonWatchlist";
import { HomeCard } from "./components/homeCard"

function App() {
  return (
    <>
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
