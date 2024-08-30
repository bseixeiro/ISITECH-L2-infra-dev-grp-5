import { FC } from "react";
import { HomeCard } from "./HomeCard";
import { ButtonPass } from "./ButtonPass";
import { ButtonSeen } from "./ButtonSeen";
import { ButtonWatchlist } from "./ButtonWatchlist";

export const HomePage: FC = () => {

    return (
        <div className="bg-stone-900 h-screen w-screen flex flex-col justify-evenly">
            <div className="mt-16 pt-24 flex justify-evenly items-center">
                <ButtonPass />
                <HomeCard />
                <ButtonSeen />
            </div>
            <ButtonWatchlist />
        </div>
    );
}