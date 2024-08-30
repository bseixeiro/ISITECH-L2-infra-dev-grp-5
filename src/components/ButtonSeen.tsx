import { FC } from "react";

// type props = PropsWithChildren<{ onClick: () => void }>;

// export const ButtonSeen: FC<props> = (props) => {
//     const { children, onClick } = props;

//     return (
//         <>
//             <button
//                 className="rounded bg-blue-500 p-3 text-base leading-none text-white shadow-sm"
//                 onClick={onClick}
//             >
//             </button>
//         </>
//     );
// };

export const ButtonSeen: FC = () => {

    return (
        <>
            <button>✅</button>
        </>
    );
};