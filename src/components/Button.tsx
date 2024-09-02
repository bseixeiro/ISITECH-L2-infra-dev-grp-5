import { FC } from "react";

type IProps = {
  label: string;
  onClick: () => void;
  className: string;
};

const Button: FC<IProps> = (props) => {
  const { label, onClick, className } = props;
  const style: string = `bg-orange-500 text-black font-semibold py-2 px-4 rounded hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-300 border border-stone-800 hover:border-gray-500 ${className}`;
  return (
    <button className={style} onClick={onClick}>
      {label}
    </button>
  );
};

export { Button };
