"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Social } from "./social";

export const Connect = () => {
    const { scrollYProgress } = useScroll();
    const x1 = useTransform(scrollYProgress, [0, 1], [50, -200]);
    const x2 = useTransform(scrollYProgress, [0, 1], [50, 250]);

    return (
        <div id="connect" className="w-full min-h-screen mt-10">
            <div className="w-full overflow-hidden">
                <motion.h1
                    style={{ x: x1 }}
                    className="w-full flex justify-center text-[8vw] text-gray-400 whitespace-nowrap transition-all max-[900px]:ml-[150px] max-[430px]:text-4xl"
                >
                    to Down to Down to&nbsp;
                    <span className="font-medium text-black">Down to</span>
                    &nbsp;Down to Down to
                </motion.h1>
                <motion.h1
                    style={{ x: x2 }}
                    className="w-full mt-[-3.5vw] flex justify-center text-[8vw] text-gray-400 whitespace-nowrap transition-all max-[900px]:ml-[-180px] max-[430px]:text-4xl max-[430px]:mt-0"
                >
                    laborate collaborate&nbsp;
                    <span className="font-medium text-black">collaborate</span>
                    &nbsp; collaborate collaborate
                </motion.h1>
            </div>

            <div className="flex flex-col gap-16 p-10">
                <div>
                    <div className="text-3xl font-semibold text-center">
                        Be part of the community
                        <p className="text-xl font-medium mt-5">
                            Visit our community page and RSVP to get
                            notifications right in your inbox when we are live
                            next.
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-10 mt-10 *:px-5 *:py-2 *:rounded-xl *:bg-white *:border-[3px] *:border-black *:font-semibold *:transition-[cubic-beizer(0.68_-0.55_0.265_1.55)_0.4s] *:shadow-[-5px_5px_0px_0px_#000]">
                        <Link
                            href={
                                "https://dsc.community.dev/vellore-institute-of-technology-bhopal/"
                            }
                            target="_blank"
                            className="hover:transform hover:translate-x-[5px] hover:translate-y-[-5px]"
                        >
                            Join Us
                        </Link>
                        <Link
                            href={"https://discord.gg/3ufQSct"}
                            target="_blank"
                            className="hover:transform hover:translate-x-[5px] hover:translate-y-[-5px]"
                        >
                            Chat
                        </Link>
                    </div>
                </div>

                <Social />
            </div>

            <div className="text-center my-3 text-gray-800 font-medium">
                Made with ❤️ by GDSC Web Team
            </div>
        </div>
    );
};
