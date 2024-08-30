import { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer className="bg-stone-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} WatchMeSwipe. All rights reserved.
                </p>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="hover:text-orange-500">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-orange-500">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-orange-500">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};