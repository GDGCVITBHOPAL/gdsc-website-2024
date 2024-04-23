import { teamTypes } from "@/lib/team";
import { MemberCard } from "./member-card";

export const DomainTeam = () => {
    return (
        <div className="flex flex-col gap-16 max-w-[800px]">
            {teamTypes.map((teamName, id) => (
                <div key={id} className="flex flex-col gap-4">
                    <div className="font-bold text-2xl tracking-wide">
                        {teamName}
                    </div>
                    <div className="flex flex-wrap items-center gap-16 max-[564px]:justify-center">
                        <MemberCard />
                        <MemberCard />
                    </div>
                </div>
            ))}
        </div>
    );
};
