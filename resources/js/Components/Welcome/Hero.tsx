import { useEffect, useState } from "react";

const Slide = () => {
    return (
        <div className="w-full bg-green-800 flex-shrink-0 min-h-80 relative p-4 rounded-lg max-w-full">
            <h2 className="text-2xl md:text-5xl font-semibold text-white">
                Unbeatable Deals Await! <br /> Shop Now and Save Big!
            </h2>
            <img
                src="/women.avif"
                alt="Women"
                className="absolute right-0 bottom-0 max-h-44 md:max-h-52"
            />
        </div>
    );
};

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [Slide, Slide, Slide, Slide, Slide];

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        setTimeout(() => {
            if (currentSlide === slides.length - 1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1);
            }
        }, 3000);
    }, [currentSlide]);

    return (
        <div className="bg-red-900">
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((Slide, index) => (
                        <Slide key={index} />
                    ))}
                </div>

                <div className="absolute flex justify-center mt-4 space-x-2 z-10 bottom-0 w-full py-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 aspect-square rounded-full ${
                                currentSlide === index
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200"
                            }`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
