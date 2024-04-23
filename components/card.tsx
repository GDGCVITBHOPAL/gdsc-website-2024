import Image from "next/image";
import Link from "next/link";

export interface CardData {
    name: string;
    banner: string;
    date: string;
    description: string;
    link: string;
}

export const Card = ({ data }: { data: CardData }) => {
    return (
        <div className="w-[250px] h-[303px] rounded-xl border-2 border-black overflow-hidden">
            <div className="relative h-[125px] w-full bg-white">
                <Image
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    src={data.banner}
                    alt={data.name}
                />
            </div>
            <div className="p-2 w-full flex flex-col">
                <div className="text-xl font-medium line-clamp-1">
                    {data.name}
                </div>
                <div className="text-sm line-clamp-2 my-2">
                    {data.description}
                </div>
                <div className="mb-2 text-sm font-medium">
                    Date: {data.date}
                </div>
                <Link
                    href={data.link}
                    className="py-2 my-2 text-sm font-medium text-center rounded-md border-2 border-black transition-colors hover:bg-black hover:text-white"
                >
                    More Info
                </Link>
            </div>
        </div>
    );
};
