import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";




function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Himanshu Kumar",
      "Guy-who-loves-Boxing.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqkBSlJ475BDZUOL5lezcrY1d9ZQCkSlXvg&usqp=CAU"
        alt=""
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="red" />
        </h1>
        <div className="pt-5">
            <Link href="#about">
            <button className="heroButton" >About</button>
            </Link>
             <Link href="#skills">
            <button className="heroButton" >Skills</button>
            </Link>
             <Link href="#projects">
            <button className="heroButton" >Projects</button>
            </Link>
           
        
        </div>
      </div>
    </div>
  );
}

export default Hero;
