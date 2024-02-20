import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full justify-center items-center flex flex-col text-center mb-20">
      <div className="-mt-10 md:mt-20">
          <h1 className="text-6xl md:text-8xl text-primary tracking-widest font-extrabold antialiased">Inspire</h1>
          <h2 className="text-5xl md:text-6xl text-zinc-900 dark:text-gray-100 tracking-wider font-bold">Create</h2>
          <h2 className="text-3xl md:text-4xl text-primary tracking-widest font-semibold">Imagine</h2>
          <span className="text-4xl md:text-6xl text-zinc-900 dark:text-muted-foreground tracking-widest">A world full of <br />
          <span className="font-bold text-black dark:text-white text-7xl md:text-8xl"> wonder</span>...</span>
      </div>
      <Image
        src="/vecteez3.png"
        alt="logo"
        height={800}
        width={800}
        className="dark:opacity-50 opacity-60 -z-10 absolute top-10 md:top-20 flex items-center mx-auto w-full md:w-1/2 justify-center"
      />
    </div>
  );
};

export default Hero;
