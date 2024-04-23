"use client";
import { motion, MotionValue, useTransform } from "framer-motion";

export const Character = ({
    children,
    range,
    progress,
}: {
    children: string;
    range: number[];
    progress: MotionValue<number>;
}) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span>
            <span className="absolute opacity-[0.3]">{children}</span>
            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
};
