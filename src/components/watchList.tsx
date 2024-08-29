import { FC, useEffect, useState } from "react";
import { WatchListMenu } from "./WatchListButtonMenu";
import { Poster } from "./Poster";

// type Props = {
//   categories: Array<string>;
// };

interface Movie {
  id: number;
  title: string;
  rating: number;
  releaseDate: string;
  imageUrl: string;
}

interface Category {
  id: number;
  name: string;
}

const WatchList: FC = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("WATCHLIST");
  const [newCategory, setNewCategory] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const userId = 1; // A remplacer !!!!

  // Ajout catégorie
  const getCategory = async () => {
    const { data, error } = await supabase.from("Category").select("name");

    if (error) {
      console.error("Error while retrieving categories : ", error);
    } else {
      const categoryNames = data.map(
        (category: { name: string }) => category.name
      );
      setCategories(categoryNames);
    }
  };

  const getMovies = async (category: string) => {
    const { data: mappingData, error: mappingError } = await supabase
      .from("Mapping")
      .select("film_id")
      .eq("category_id", category);

    if (mappingError) {
      console.error("Error while retrieving films : ", mappingError);
      return;
    }
    const filmIds = mappingData.map(
      (mapping: { film_id: number }) => mapping.film_id
    );

    if (filmIds.length > 0) {
      const { data: moviesData, error: moviesError } = await supabase
        .from("Movies")
        .select("id, title, rating, releaseDate, imageUrl")
        .in("id", filmIds);

      if (moviesError) {
        console.error(
          "Error while retrieving details from filmId : ",
          filmIds,
          "\nError log : ",
          moviesError
        );
      } else {
        setMovies(moviesData);
      }
    } else {
      setMovies([]);
    }
  };

  const addCategory = async () => {
    if (newCategory.trim() === "") return;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, error } = await supabase
      .from("Category")
      .insert([{ name: newCategory }]);

    if (error) {
      console.error("Error while adding category : ", error);
    } else {
      setCategories((prevCategories) => [
        ...prevCategories,
        { name: newCategory, id: data[0].id },
      ]);
      setNewCategory("");
      setIsModalOpen(false);
    }
  };

  // const deleteCategory = async (categoryId: number, categoryName: string) => {
  //   if (categoryName === "WATCHLIST") {
  //     alert("Category 'WATCHLIST' can not be delete.");
  //     return;
  //   }

  //   const { error } = await supabase.from("Category").delete().eq("id", categoryId);

  //   if (error) {
  //     console.error("Error while deleting category : ", error);
  //   } else {
  //     setCategories((prevCategories) => prevCategories.filter((category) => category.id !== categoryId));
  //     if (selectedCategory === categoryName) {
  //       setSelectedCategory("WATCHLIST");
  //     }
  //   }
  // };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    getMovies(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex w-screen h-screen">
      <aside className="flex flex-col w-1/5 bg-black p-4">
        {categories.map((category, idx) => (
          <WatchListMenu
            key={idx}
            label={category}
            idx={categories.indexOf(category)}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-500 text-black font-semibold py-2 px-4 rounded hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 border border-black hover:border-white mb-4"
        >
          +
        </button>

        {/*Ajout d'un fenetre pour saisie de la nouvelle category*/}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-4">
                Ajouter une nouvelle catégorie
              </h2>
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Nom de la catégorie"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <div className="flex justify-end">
                <button
                  onClick={addCategory}
                  className="p-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-400"
                >
                  Ajouter
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 bg-gray-500 text-white rounded hover:bg-gray-400"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}
      </aside>
      <div className="h-screen w-[2px] bg-orange-500"></div>
      <main className="w-4/5 bg-black p-4 flex flex-wrap justify-start gap-4">
        {movies.map((movie) => (
          <Poster
            key={movie.id}
            imageUrl={movie.imageUrl}
            title={movie.title}
            rating={movie.rating}
            releaseDate={movie.releaseDate}
          />
        ))}
      </main>
    </div>
  );
};

export { WatchList };
