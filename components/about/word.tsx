import { MotionValue } from "framer-motion";
import { Character } from "./character";

export const Word = ({
    children,
    range,
    progress,
}: {
    children: string;
    range: number[];
    progress: MotionValue<number>;
}) => {
    const amount = range[1] - range[0];
    const step = amount / children.length;
    const characters = children.split("");
    return (
        <span className="mr-3 mt-3 relative">
            {characters.map((character, i) => {
                const start = range[0] + step * i;
                const end = range[0] + step * (i + 1);
                return (
                    <Character key={i} range={[start, end]} progress={progress}>
                        {character}
                    </Character>
                );
            })}
        </span>
    );
};
