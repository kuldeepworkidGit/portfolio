import { useState, TouchEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps {
  images: string[];
  altPrefix?: string;
}

const ProjectScreenshotCarousel: React.FC<CarouselProps> = ({
  images,
  altPrefix = "Project screenshot",
}) => {
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  if (images.length === 0) return null;

  const goTo = (newIndex: number) => {
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    setIndex(newIndex);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(deltaX) > 40) {
      // swipe right -> prev, swipe left -> next
      if (deltaX > 0) goTo(index - 1);
      else goTo(index + 1);
    }
    setTouchStartX(null);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-slate-900 border border-slate-700">
      {/* Image area */}
      <div
        className="relative aspect-[9/19] w-full" // tall mobile style
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`${altPrefix} ${index + 1}`}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
          />
        </AnimatePresence>
      </div>

      {/* Prev / Next buttons */}
      <button
        onClick={() => goTo(index - 1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-xs text-white hover:bg-black/70"
      >
        ‹
      </button>
      <button
        onClick={() => goTo(index + 1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-xs text-white hover:bg-black/70"
      >
        ›
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-1 py-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 w-1.5 rounded-full transition ${
              i === index ? "bg-blue-500 w-4" : "bg-slate-500/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectScreenshotCarousel;
