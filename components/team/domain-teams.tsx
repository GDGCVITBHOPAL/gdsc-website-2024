import { TeamData, teamTypes } from "@/lib/team";
import { MemberCard } from "./member-card";

export const DomainTeam = () => {
    return (
        <div className="flex flex-col gap-16 max-w-[800px]">
            {teamTypes.map((teamName, id) => (
                <div key={id} className="flex flex-col gap-4">
                    <div className="font-bold text-2xl tracking-wide">
                        {teamName}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-16">
                        {TeamData.map(
                            ({ domain, members }) =>
                                domain == teamName &&
                                members.map(
                                    (
                                        {
                                            name,
                                            position,
                                            profileLink,
                                            profileImage,
                                        },
                                        id
                                    ) => (
                                        <MemberCard
                                            key={id}
                                            name={name}
                                            position={position}
                                            profileLink={profileLink}
                                            profileImage={profileImage}
                                        />
                                    )
                                )
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
