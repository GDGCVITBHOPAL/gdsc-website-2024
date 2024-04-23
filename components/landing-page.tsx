import { About } from "@/components/about/about";
import { LandingText } from "@/components/landing-text";
import { Recent } from "@/components/recent";
import { MeetTheTeam } from "./meet-the-team";
import { Partners } from "./partners";
export const LandingPage = () => {
    return (
        <>
            <LandingText />
            <About />
            <MeetTheTeam />
            <Recent />
            <Partners />
        </>
    );
};
