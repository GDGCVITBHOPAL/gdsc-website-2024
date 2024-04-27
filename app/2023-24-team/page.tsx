import { DomainTeam } from "@/components/team/domain-teams";
import Image from "next/image";

export default function Page() {
    return (
        <main className="relative w-screen min-h-screen select-none">
            <div className="p-10 flex flex-col items-center">
                <div className="fixed top-0 left-0 h-screen w-full bg-white z-[-1]">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
                </div>
                <div>
                    <Image
                        priority
                        width={150}
                        height={150}
                        src={"/logo-design.svg"}
                        alt="Follow us on Twitter"
                    />
                </div>
                <div className="text-5xl text-center font-extrabold mb-8">
                    2023-24 Team
                </div>
                <DomainTeam />
            </div>
        </main>
    );
}
