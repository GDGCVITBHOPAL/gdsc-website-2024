import { About } from "@/components/about/about";
import { Connect } from "@/components/connect";
import { LandingText } from "@/components/landing-text";
import { Recent } from "@/components/recent";
import { Team } from "./team";
import { Partners } from "./partners";
export const LandingPage = () => {
    return (
        <>
            <LandingText />
            <About />
            <Team />
            <Recent />
            <Partners />
            {/* <Connect /> */}
        </>
    );
};
