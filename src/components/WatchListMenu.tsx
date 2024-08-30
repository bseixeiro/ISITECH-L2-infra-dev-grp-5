import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  label: string;
  idx: number;
  onClick: () => void;
}>;

export const WatchListMenu: FC<Props> = (props) => {
  const { label, idx, onClick } = props;

  return (
    <button
      key={idx}
      className="bg-orange-500 text-black font-semibold py-2 px-4 rounded hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 border border-stone-800 hover:border-grey-500 mb-4"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
