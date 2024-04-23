"use client";

import { motion } from "framer-motion";
import { TabBox } from "./tab-box";

export const Recent = () => {
    return (
        <main
            id="activities"
            className="w-full relative z-0 py-10 flex flex-col gap-5 overflow-hidden mb-10"
        >
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e7e7e7_1.5px,transparent_1.5px)] [background-size:16px_16px]"></div>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(100%_50%_at_50%_0%,rgba(255,255,255,1)_0,rgba(0,163,255,0)_50%,rgba(255,255,255,0)_100%)]"></div>
            <div className="absolute bottom-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(100%_50%_at_50%_0%,rgba(255,255,255,1)_0,rgba(0,163,255,0)_50%,rgba(255,255,255,0)_100%)] rotate-180"></div>

            <div className="absolute top-1/2 transform -translate-y-1/2 ml-10 flex flex-col gap-[300px] *:h-8 *:w-8 *:rounded-full *:p-1 *:hover:cursor-grab max-[1170px]:!hidden">
                <motion.div
                    drag
                    dragElastic={0.7}
                    dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                    className="bg-[#ea4335] ml-10"
                >
                    <div className="bg-white h-full w-full rounded-full" />
                </motion.div>

                <motion.div
                    drag
                    dragElastic={0.7}
                    dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                    className="bg-[#4285f4]"
                >
                    <div className="bg-white h-full w-full rounded-full" />
                </motion.div>
            </div>

            <div className="absolute right-0 top-1/4 transform -translate-y-1/4 mr-10 flex flex-col gap-[300px] *:h-8 *:w-8 *:rounded-full *:p-1 *:hover:cursor-grab max-[1170px]:!hidden">
                <motion.div
                    drag
                    dragElastic={0.7}
                    dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                    className="bg-[#34a853] mr-10"
                >
                    <div className="bg-white h-full w-full rounded-full" />
                </motion.div>

                <motion.div
                    drag
                    dragElastic={0.7}
                    dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                    className="bg-[#fbbc05] self-end"
                >
                    <div className="bg-white h-full w-full rounded-full" />
                </motion.div>
            </div>

            <div className="w-full text-center text-5xl font-semibold">
                Chapter Activities
            </div>
            <TabBox />
        </main>
    );
};
