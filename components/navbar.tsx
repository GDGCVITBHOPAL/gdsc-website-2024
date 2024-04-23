"use client";
import Link from "next/link";
import { Model } from "./model";
import { useState } from "react";

export const Navbar = () => {
    const [openModel, setOpenModel] = useState(false);
    return (
        <nav className="fixed top-0 left-0 w-full z-[50]">
            <div className="w-fit bg-white border-2 border-black shadow-[-4px_4px_0px_0px_#000] rounded-full py-2 px-5 mt-4 mx-auto flex items-center gap-5 text-sm max-[430px]:hidden">
                <Link href="/" className="hover:font-semibold">
                    Home
                </Link>
                <Link href="#about" className="hover:font-semibold">
                    About
                </Link>
                <Link href="/2023-24-team" className="hover:font-semibold">
                    Team
                </Link>
                <Link href="#activities" className="hover:font-semibold">
                    Activities
                </Link>
                <Link href="#connect" className="hover:font-semibold">
                    Connect
                </Link>
            </div>
            <button
                onClick={() => setOpenModel(true)}
                className="hidden p-1 max-[430px]:block"
            >
                <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/badges/48/xbox-menu.png"
                    alt="xbox-menu"
                />
            </button>
            {openModel && <Model setOpenModel={setOpenModel} />}
        </nav>
    );
};
