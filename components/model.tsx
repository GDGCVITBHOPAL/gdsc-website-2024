import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export const Model = ({
    setOpenModel,
}: {
    setOpenModel: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <div className="absolute top-0 left-0 w-1/2 h-screen z-50 bg-white p-10 flex flex-col gap-10 text-xl font-medium transition-opacity">
            <button onClick={() => setOpenModel(false)}>
                <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/badges/48/circled-x.png"
                    alt="circled-x"
                />
            </button>
            <div className="text-3xl font-bold">Menu</div>
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
    );
};
