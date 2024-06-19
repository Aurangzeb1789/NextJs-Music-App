import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { Dancing_Script } from "next/font/google";
import { Arizonia } from "next/font/google";

const musicFont = Dancing_Script({
    weight: '600',
    subsets: ['latin'],
    display: 'swap',
})

const buttonFont = Arizonia({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

function Hero() {
    return <>
        <div className="flex items-center justify-center flex-col text-center gap-8">
            <Spotlight className="top-0 left-0 md:left-60 md:-top-20" fill="white" />

            <h1 className="md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master The Art Of Music</h1>
            <p className="text-xl tracking-wide md:text-2xl text-neutral-300 max-w-lg mx-auto">
                <span className={buttonFont.className}>
                    Dive into our comprehensive music courser and transform your musical
                    journey today.Whether you are a beginner or looking to refine your skills,
                    join us to unlock your true potential.
                </span>
            </p>
            <div className="mt-[10px]">
                <Button
                    borderRadius="1.75rem"
                    className=" border-2 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 tracking-widest text-xl px-[20px] dark:hover:bg-slate-950 transition-all ease-in-out">
                    <span className={buttonFont.className}>Explore The Course</span>
                </Button>
            </div>

        </div>
    </>
}

export default Hero;