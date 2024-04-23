import { BOARD } from "@/lib/data";
import { MotionValue } from "framer-motion";
import { Board } from "./board";

export const Xylophone = ({ progress }: { progress: MotionValue<number> }) => {
    return (
        <div className="w-full h-screen sticky top-0 flex items-end justify-end overflow-hidden max-[1280px]:z-[-10] max-[1280px]:opacity-20">
            <div className="relative h-screen w-[300px] flex flex-col gap-8 py-10 *:h-full *:w-[500px] *:border-4 *:border-black *:rounded-2xl *:flex *:items-center *:justify-between *:px-16 *:*:h-5 *:*:w-5 *:*:bg-black *:*:rounded-full">
                <div className="!rounded-xl !h-[90%] !w-2 absolute left-1/2 !p-0 !bg-black -rotate-[16deg] z-[-1]" />
                {BOARD.map(({ marginLeft, color }, i) => {
                    const start = (i * 1) / BOARD.length;
                    const end = start + 1 / BOARD.length;
                    return (
                        <Board
                            key={i}
                            boardColor={color}
                            progress={progress}
                            range={[start, end]}
                            marginLeft={marginLeft}
                        />
                    );
                })}
            </div>
        </div>
    );
};
