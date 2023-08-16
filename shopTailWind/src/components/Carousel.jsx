
import { useState } from "react";


export const Carousel = function (products) {
    const [currentSlide, setCurrentSlide] = useState(2);
    const makeThumbnails = products.products.map((product) => {
        return product.thumbnail
    })

    return (
        <div id="animation-carousel" class="relative w-full mb-10 border border-gray-900" data-carousel="static">
            <div class="relative h-[20em] rounded-lg overflow-hidden">
                <div
                    className={`duration-200 ease-linear flex`}
                    data-carousel-item
                >
                    {makeThumbnails.slice(currentSlide, currentSlide + 3).map((thumbnail, index) => (
                        <img
                            key={index}
                            src={thumbnail}
                            className={`absolute block w-1/2 top-1/2 left-${index - 1}/2 transform -translate-y-1/2`}
                            alt={`Slide ${currentSlide + index}`}
                        />
                    ))}
                </div>
                <button type="button"
                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                    onClick={() => setCurrentSlide(currentSlide - 1)}
                >
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                    onClick={() => setCurrentSlide(currentSlide + 1)}
                >
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    )
}
