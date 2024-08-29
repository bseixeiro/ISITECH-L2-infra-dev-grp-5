import { FC, useEffect, useState } from "react";
import { WatchListMenu } from "./WatchListMenu";

// type Props = {
//   categories: Array<string>;
// };

const WatchList: FC = () => {
  const [categories, setCategories] = useState<Array<string>>([]);

  const getCategory = async () => {
    const { data, error } = await supabase.from("Category").select("name");

    if (error) {
      console.error("Error while retrieving categories:", error);
    } else {
      const categoryNames = data.map(
        (category: { name: unknown }) => category.name
      );
      setCategories(categoryNames);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="flex w-screen h-screen">
      <aside className="flex flex-col w-1/5 bg-black p-4">
        {categories.map((category, idx) => (
          <WatchListMenu
            key={idx}
            label={category}
            idx={categories.indexOf(category)}
            onClick={function (): void {
              console.log(`Clicked on category: ${category}`);
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
