import { FC } from "react";

interface PosterProps {
  imageUrl: string;
  title: string;
  rating: number;
  releaseDate: string;
}

const Poster: FC<PosterProps> = ({ imageUrl, title, rating, releaseDate }) => {
  return (
    <article className="w-[calc(100%/4-20px)] h-[300px] bg-white border-2 border-white rounded-lg p-4 transition-shadow duration-300 hover:shadow-[6px_6px_8px_rgba(255,255,255,0.6)]">
      <img src={imageUrl} alt={title} className="h-1/2 w-auto object-contain" />
      <div className="text-center mt-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">Rating: {rating}/10</p>
        <p className="text-sm">Release Date: {releaseDate}</p>
      </div>
    </article>
  );
};

export { Poster };
