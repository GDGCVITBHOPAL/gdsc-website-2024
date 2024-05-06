import { partners } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export const Partners = () => {
    return (
        <main className="relative w-full min-h-screen flex flex-col items-center justify-center gap-10 py-16 mt-10">
            <div className="absolute inset-0 z-[-3] h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#bdd4fb,transparent)]"></div>
            </div>
            <div className="absolute top-[-50px] z-[-1] h-full w-full bg-transparent bg-[radial-gradient(100%_50%_at_50%_0%,rgba(255,255,255,1)_0,rgba(0,163,255,0)_100%,rgba(255,255,255,0)_100%)]"></div>
            <div className="w-full text-center text-5xl font-semibold">
                Our Partners
            </div>

            <div className="w-[75%] flex flex-wrap justify-center items-center gap-16 p-10">
                {partners.map(({ name, banner, link }, id) => (
                    <Link
                        key={id}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-[250px] h-[250px] !bg-white bg-opacity-60 border-4 border-black rounded-xl shadow-[-5px_5px_0px_0px_#000]"
                    >
                        <Image
                            fill
                            style={{ objectFit: "contain" }}
                            className="p-6"
                            src={banner}
                            alt={name}
                        />
                    </Link>
                ))}
            </div>
        </main>
    );
};
