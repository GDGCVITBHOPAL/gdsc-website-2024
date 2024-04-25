"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
export const LandingText = () => {
    const { scrollYProgress } = useScroll();
    const x1 = useTransform(scrollYProgress, [0, 1], [50, -200]);
    const x2 = useTransform(scrollYProgress, [0, 1], [50, 200]);
    return (
        <div className="w-full relative">
            <div className="absolute top-0 left-0 h-screen w-full bg-white z-[-1]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            </div>
            <div className="h-[300px] w-full flex items-center justify-center">
                <Image
                    priority
                    width={150}
                    height={150}
                    src={"/logo-design.svg"}
                    alt="Follow us on Twitter"
                />
            </div>

            <div className="w-full overflow-hidden">
                <motion.h1
                    style={{ x: x1 }}
                    className="w-full flex justify-center text-[10vw] text-gray-700 whitespace-nowrap transition-all max-[600px]:text-5xl"
                >
                    gle Google Google&nbsp;
                    <span className="text-[#ea4335] font-medium">Google</span>
                    &nbsp;Google Google Google
                </motion.h1>
                <motion.h1
                    style={{ x: x2 }}
                    className="w-full mt-[-3.5vw] flex justify-center text-[10vw] text-gray-700 whitespace-nowrap transition-all max-[600px]:text-5xl max-[600px]:mt-2 max-[600px]:ml-[-100px]"
                >
                    Developer Developer&nbsp;
                    <span className="text-[#4285f4] font-medium">
                        Developer
                    </span>
                    &nbsp;Developer Develop
                </motion.h1>
                <motion.h1
                    style={{ x: x1 }}
                    className="w-full mt-[-3.5vw] flex justify-center text-[10vw] text-gray-700 whitespace-nowrap transition-all max-[600px]:text-5xl max-[600px]:mt-2"
                >
                    ent Student Student&nbsp;
                    <span className="text-[#34a853] font-medium">Student</span>
                    &nbsp;Student Student Student
                </motion.h1>
                <motion.h1
                    style={{ x: x2 }}
                    className="w-full mt-[-3.5vw] flex justify-center text-[10vw] text-gray-700 whitespace-nowrap transition-all max-[600px]:text-5xl max-[600px]:mt-2 max-[600px]:ml-[-150px]"
                >
                    Club Club Club Club Club&nbsp;
                    <span className="text-[#fbbc05] font-medium">Club</span>
                    &nbsp;Club Club Club Club
                </motion.h1>

                <div className="w-full text-[1.8vw] text-center leading-tight font-semibold max-[600px]:text-2xl max-[600px]:mt-6">
                    x VIT Bhopal
                    <br />
                    University
                </div>
                <div className="w-full mt-8 text-[2.6vw] text-center leading-tight font-semibold max-[600px]:text-2xl max-[600px]:px-3 max-[600px]:mt-6">
                    Turning caffeine into &#60;/code&#62;
                    <br />
                    since 2020
                </div>
            </div>
        </div>
    );
};
