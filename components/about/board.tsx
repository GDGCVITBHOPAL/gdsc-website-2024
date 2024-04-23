"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export const Board = ({
    boardColor,
    marginLeft,
    range,
    progress,
}: {
    boardColor: string;
    marginLeft: string;
    range: number[];
    progress: MotionValue<number>;
}) => {
    const color = useTransform(progress, range, ["#fff", boardColor]);

    return (
        <motion.div style={{ backgroundColor: color, marginLeft: marginLeft }}>
            <div />
            <div />
        </motion.div>
    );
};
