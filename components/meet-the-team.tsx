import Image from "next/image";

export const MeetTheTeam = () => {
    return (
        <main className="min-h-screen w-full py-16 pr-28 my-[90px] max-[1260px]:pr-20 max-[1100px]:pr-12 max-[880px]:pr-6 max-[700px]:pr-3">
            <div className="relative w-full min-h-screen rounded-3xl border-[3px] border-black -ml-10 flex flex-col p-10 pl-16 overflow-hidden max-[1100px]:p-8 max-[800px]:p-5 max-[700px]:-ml-6">
                <div className="absolute top-[65px] -right-[40%] bg-white border-2 border-black w-full p-2 text-center text-lg font-medium shadow-[0px_5px_0px_0px_#000] rotate-[35deg] max-[1300px]:text-base max-[1200px]:top-[60px] max-[1200px]:rotate-[40deg] max-[1080px]:text-sm max-[915px]:text-xs max-[835px]:rotate-45 max-[725px]:text-[10px] max-[700px]:mr-16 max-[700px]:-right-[50%] max-[700px]:top-[45px]">
                    Caffeine Powered Developers
                </div>
                <div className="text-5xl font-bold p-10 max-[700px]:pl-4">
                    <p className="text-gray-400 pb-3">Get to Know</p>
                    <p>the Team</p>
                </div>
                <p className="text-2xl font-semibold text-gray-400 w-[925px] p-10 max-[980px]:w-full max-[700px]:px-4">
                    Meet the crew behind{" "}
                    <span className="text-black">
                        Developer Student Clubs - VIT Bhopal!
                    </span>{" "}
                    We're <span className="text-black">passionate</span> devs
                    and tech <span className="text-black">enthusiasts</span>{" "}
                    here to guide you on your coding journey. Get ready for
                    <span className="text-black"> workshops, hackathons,</span>
                    and tons of{" "}
                    <span className="text-black">collaborative projects!</span>
                </p>
                <div className="flex flex-wrap justify-between gap-10 p-10 max-[713px]:justify-center max-[700px]:px-4">
                    <div className="rounded-lg flex flex-col gap-5 w-[250px]">
                        <div className="relative w-[250px] h-[250px] bg-[#4285f4] bg-opacity-60 border-4 border-black rounded-xl">
                            <Image
                                fill
                                style={{ objectFit: "cover" }}
                                className="p-6"
                                src="https://img.icons8.com/external-febrian-hidayat-glyph-and-outline-febrian-hidayat/500/external-Manage-delivery-and-logistic-febrian-hidayat-outline-and-glyph-febrian-hidayat-2.png"
                                alt="Leadership & Management"
                            />
                        </div>
                        <div className="font-semibold text-xl flex flex-col gap-2">
                            Leadership & Management
                            <span className="text-lg text-gray-400">
                                Guiding the vision, driving results.
                            </span>
                        </div>
                    </div>
                    <div className="rounded-lg flex flex-col gap-5 w-[250px]">
                        <div className="relative w-[250px] h-[250px] bg-[#34a853] bg-opacity-60 border-4 border-black rounded-xl">
                            <Image
                                fill
                                style={{ objectFit: "cover" }}
                                className="p-6"
                                src="https://img.icons8.com/ios-filled/500/decentralized-network.png"
                                alt="Technical Expertise"
                            />
                        </div>
                        <div className="font-semibold text-xl flex flex-col gap-2">
                            Technical Expertise
                            <span className="text-lg text-gray-400">
                                Coding the future, one line at a time.
                            </span>
                        </div>
                    </div>
                    <div className="rounded-lg flex flex-col gap-5 w-[250px]">
                        <div className="relative w-[250px] h-[250px] bg-[#fbbc05] bg-opacity-60 border-4 border-black rounded-xl">
                            <Image
                                fill
                                style={{ objectFit: "cover" }}
                                className="p-6"
                                src="https://img.icons8.com/glyph-neue/500/gears--v1.png"
                                alt="Community & Operations"
                            />
                        </div>
                        <div className="font-semibold text-xl flex flex-col gap-2">
                            Community & Operations
                            <span className="text-lg text-gray-400">
                                Building connections, fueling innovation.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
