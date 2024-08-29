import { FC } from "react";
import { WatchListMenu } from "./WatchListMenu";

// type Props = {
//   categories: Array<string>;
// };

const WatchList: FC = () => {
  // const {} = props;

  // const [categories, setCategories] = useState<Array<string>>([]);
  const categoriesTest = ["WATCHLIST", "HISTORIQUE", "ACTION", "SF", "CHILL"];
  // const getCategory = () => {
  //   setCategories(["WATCHLIST", "HISTORIQUE", "ACTION", "SF", "CHILL"]);
  // };
  return (
    <div className="flex w-screen h-screen">
      <aside className="flex flex-col w-1/5 bg-black p-4">
        {categoriesTest.map((category) => (
          <WatchListMenu
            label={category}
            idx={0}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        ))}
      </aside>
      <div className="h-screen w-[2px] bg-orange-500"></div>
      <main className="w-4/5 bg-black p-4 flex flex-wrap justify-start gap-4">
        <article className="w-[calc(100%/4-20px)] h-[300px] bg-white border-2 border-white rounded-lg p-4 transition-shadow duration-300 hover:shadow-[6px_6px_8px_rgba(255,255,255,0.6)]"></article>
        <article className="w-[calc(100%/4-20px)] h-[300px] bg-white border-2 border-white rounded-lg p-4 transition-shadow duration-300 hover:shadow-[6px_6px_8px_rgba(255,255,255,0.6)]"></article>
        <article className="w-[calc(100%/4-20px)] h-[300px] bg-white border-2 border-white rounded-lg p-4 transition-shadow duration-300 hover:shadow-[6px_6px_8px_rgba(255,255,255,0.6)]"></article>
        <article className="w-[calc(100%/4-20px)] h-[300px] bg-white border-2 border-white rounded-lg p-4 transition-shadow duration-300 hover:shadow-[6px_6px_8px_rgba(255,255,255,0.6)]"></article>
        <article className="w-[calc(100%/4-20px)] h-[300px] bg-white border-2 border-white rounded-lg p-4 transition-shadow duration-300 hover:shadow-[6px_6px_8px_rgba(255,255,255,0.6)]"></article>
      </main>
    </div>
  );
};

export { WatchList };
