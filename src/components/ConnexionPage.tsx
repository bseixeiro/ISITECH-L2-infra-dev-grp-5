import { FC } from "react";
import { Button } from "./Button";

type IProps = {
  test: string;
};

const ConnexionPage: FC<IProps> = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="mdp"></input>
        <Button
          label="Connexion"
          onClick={() => console.log("")}
          className="bg-orange-500 text-black font-semibold py-2 px-4 rounded hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 border border-stone-800 hover:border-gray-500"
        ></Button>
      </div>
    </div>
  );
};

export { ConnexionPage };
