import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { squareData } from "@/const/const";

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 0.1, scale: 1 }}
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <>
      <div className="absolute h-119.25 min-[411px]:h-244.5 inset-0 grid bg-bg grid-cols-4 grid-rows-4 gap-2 z-0 overflow-hidden">
        {squares.map((sq) => sq)}
      </div>
      <div className="absolute top-119.25 h-119.25 visible min-[411px]:hidden inset-0 grid bg-bg grid-cols-4 grid-rows-4 gap-2 z-0 overflow-hidden">
        {squares.map((sq) => sq)}
      </div>
    </>
  );
};

export default ShuffleGrid;
