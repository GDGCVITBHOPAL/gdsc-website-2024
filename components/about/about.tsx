"use client";
import { aboutContent } from "@/lib/data";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { Word } from "./word";
import { Xylophone } from "./xylophone";
export const About = () => {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.25"],
    });

    const part1 = aboutContent[0].split(" ");
    const part2 = aboutContent[1].split(" ");

    return (
        <div id="about" className="w-full relative mt-[120px]">
            <Xylophone progress={scrollYProgress} />
            <div className="h-[200px] w-full text-7xl font-semibold p-10 pb-20 flex items-center">
                About Us
            </div>
            <p className="w-full text-3xl font-semibold pl-10 flex items-center">
                Developer Student Clubs is an initiative of Google Developers
            </p>
            <p
                ref={element}
                className="text-2xl font-medium max-w-[900px] p-10 flex flex-wrap leading-none"
            >
                {part1.map((word, i) => {
                    const start = i / (part1.length + part2.length);
                    const end = start + 1 / (part1.length + part2.length);
                    return (
                        <Word
                            key={i}
                            range={[start, end]}
                            progress={scrollYProgress}
                        >
                            {word}
                        </Word>
                    );
                })}
            </p>
            <p
                ref={element}
                className="text-2xl font-medium max-w-[900px] p-10 flex flex-wrap leading-none"
            >
                {part2.map((word, i) => {
                    const start =
                        (part1.length + i) / (part1.length + part2.length);
                    const end = start + 1 / (part1.length + part2.length);
                    return (
                        <Word
                            key={i}
                            range={[start, end]}
                            progress={scrollYProgress}
                        >
                            {word}
                        </Word>
                    );
                })}
            </p>
            <div className="h-[500px] w-full" />
        </div>
    );
};
