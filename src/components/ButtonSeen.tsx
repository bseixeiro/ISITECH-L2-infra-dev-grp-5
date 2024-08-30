import { FC, useState } from "react";

export const ButtonSeen: FC = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = () => setShowTooltip(true);
    const handleMouseLeave = () => setShowTooltip(false);
    const handleMouseMove = (e: React.MouseEvent) => {
        setTooltipPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <>
            <div className="relative pl-12">
                <button
                    className="bg-stone-700 hover:bg-stone-600 border border-5 border-orange-500 rounded-full w-16 h-16 text-2xl p-4"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}>
                    <img src="https://www.svgrepo.com/show/535228/bookmark.svg" alt="Seen Icon" />
                </button>
                {showTooltip && (
                    <div
                        className="fixed p-2 bg-black text-white text-sm rounded shadow-lg transform -translate-x-1/2 -translate-y-full"
                        style={{ left: tooltipPosition.x, top: tooltipPosition.y - 10 }}>
                        Add to Watchlist
                    </div>
                )}
            </div>
        </>
    );
};
