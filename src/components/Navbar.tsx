import { ChangeEventHandler, FC } from "react";
import { Button } from "./Button";
import { SearchInput } from "./SearchInput";

type IProps = {
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
  searchValue: string;
};

const Navbar: FC<IProps> = (props) => {
  const { searchValue, onSearchChange } = props;

  return (
    <div className="sticky bg-stone-800 w-full flex justify-between items-center p-3 text-white">
      <div className="basis-1/4 flex justify-center items-center">
        <h1 className="text-2xl">WatchMeSwipe</h1>
      </div>
      <div className="basis-1/2 flex justify-center items-center">
        <SearchInput
          value={searchValue}
          onClick={() => console.log(searchValue)}
          onChange={onSearchChange}
        />
      </div>
      <div className="basis-1/6 flex justify-center items-center">
        <Button
          className="w-1/2"
          label="Connexion"
          onClick={() => console.log("test")}
        ></Button>
      </div>
    </div>
  );
};

export { Navbar };
