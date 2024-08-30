import { ButtonNo } from "./components/ButtonNo";
import { ButtonSeen } from "./components/ButtonSeen"
import { HomeCard } from "./components/homeCard"

function App() {
  return (
    <>
      <div className="bg-black h-screen w-screen flex justify-evenly items-center">
        <ButtonNo />
        <HomeCard />
        <ButtonSeen />
      </div>
    </>
  );
}

export default App;
