import { FC } from "react";

// type Props = {
//     id: string;
//     title: string;
//     author: string;
//     date: string;
//     picture: string;
//     note: number;
// };

// const testData = [
//     {
//         id: 1,
//         title: "Titanic",
//         author: "Ok",
//         date: "29/08/1990",
//         picture: "Pic",
//         note: 5,
//     }
// ]

export const HomeCard: FC/*<Props>*/ = (/*props*/) => {
    // const { title, author, date, picture, note } = props;

    // const [film, setFilm] = useState<{}>({

    // });
    const title = "Titanic";
    const author = "James Cameron";
    const note = "★★★✰✰";
    const picture = "https://m.media-amazon.com/images/M/MV5BYzM3ZTgxYzgtOWNlYi00Nzk3LWIwZjYtYzg4MjY2ZDY3NjNmXkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_SX300.jpg"
    const date = "29/08/24"

    // const getTitle = () => {
    //     setTitle("Titanic")
    // }


    return (
        <>
            <div className="flex flex-col border-4 border-orange-500 shadow-xl">
                <img src={picture}></img>
                <div className="bg-stone-600 grid grid-rows-2 grid-flow-col gap-4 border-t-4 border-orange-500">
                    <p className="mt-2 ml-2 text-orange-500 underline">{title}</p>
                    <p className="mb-2 ml-2 text-white">{note}</p>
                    <p className="mt-2 mr-2 text-right text-white">{author}</p>
                    <p className="mb-2 mr-2 text-right text-white">{date}</p>
                </div>
            </div>
        </>
    );
};