import React from "react";

interface RatingStarsProps {
    rating: number;
}

const Stars: React.FC<RatingStarsProps> = ({ rating }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < rating ? "#fbbf24" : "none"}
                    viewBox="0 0 30 30"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-yellow-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.309 7.062a1.125 1.125 0 001.07.77h7.323c.969 0 1.371 1.24.588 1.81l-5.926 4.195a1.125 1.125 0 00-.412 1.255l2.31 7.062c.3.921-.755 1.688-1.54 1.188l-5.926-4.195a1.125 1.125 0 00-1.316 0l-5.926 4.195c-.785.5-1.84-.267-1.54-1.188l2.309-7.062a1.125 1.125 0 00-.412-1.255L.68 12.57c-.783-.57-.381-1.81.588-1.81h7.323a1.125 1.125 0 001.07-.77l2.31-7.062z"
                    />
                </svg>
            ))}
        </div>
    );
};

export default Stars;
