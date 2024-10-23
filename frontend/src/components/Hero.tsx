import { useState, useEffect } from "react";

const Hero = () => {
  const reactDescriptions = [
    "Find your next stay",
    "Discover your perfect getaway",
    "Book your ideal accommodation",
  ];

  const [currentDescription, setCurrentDescription] = useState(
    reactDescriptions[0]
  );

  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescription(reactDescriptions[genRandomInt(2)]);
    }, 10000); // 30 seconds

   
    return () => clearInterval(interval);
  }, [reactDescriptions]);

  return (
    <div className="bg-sky-500 pb-16">
      <div className="container mx-auto flex flex-col gap-2">
        <h1 className="text-5xl text-white font-bold">{currentDescription}</h1>
        <p className="text-2xl text-white">
          Search low prices on houses for your dream life...
        </p>
      </div>
    </div>
  );
};

export default Hero;
