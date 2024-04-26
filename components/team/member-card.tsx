import Image from "next/image";
import Link from "next/link";

export const MemberCard = ({
    name,
    position,
    profileLink,
    profileImage,
}: {
    name: string;
    position: string;
    profileLink: string;
    profileImage: string;
}) => {
    return (
        <Link
            href={profileLink}
            target="_blank"
            className="flex flex-col items-center justify-center gap-4 w-[210px]"
        >
            <Image
                height={150}
                width={150}
                src={profileImage}
                alt={name}
                className="w-[150px] h-[150px] object-cover object-center rounded-full bg-white border-2 border-black shadow-[-5px_5px_0px_0px_#000] overflow-hidden"
            />
            <div className="flex flex-col items-center justify-center">
                <div className="font-medium text-lg">{name}</div>
                <div className="text-gray-600 text-sm">{position}</div>
            </div>
        </Link>
    );
};
