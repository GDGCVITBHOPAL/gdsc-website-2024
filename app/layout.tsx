import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Connect } from "@/components/connect";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://gdsc-website-2024.vercel.app/"),
    title: "Developer Student Club VIT Bhopal University",
    description:
        "Developer Student Clubs is an initiative of Google Developers. Google collaborates with DSC Leads once a year who are pursuing an undergraduate or graduate university degree and supports them as they start and grow their on-campus community. DSC activities are targeted at University students and others including faculty members who want to learn development skills & work to solve real-life problems. We at DSC — VIT Bhopal look forward to form a community where we are able to convert our knowledge into real time application, help each student to develop in different fields of technology and make use of our knowledge to build something that helps local businesses around us as well as their community.",
    openGraph: {
        title: "Developer Student Club VIT Bhopal University",
        description:
            "Developer Student Clubs is an initiative of Google Developers. Google collaborates with DSC Leads once a year who are pursuing an undergraduate or graduate university degree and supports them as they start and grow their on-campus community. DSC activities are targeted at University students and others including faculty members who want to learn development skills & work to solve real-life problems. We at DSC — VIT Bhopal look forward to form a community where we are able to convert our knowledge into real time application, help each student to develop in different fields of technology and make use of our knowledge to build something that helps local businesses around us as well as their community.",
        url: "https://gdsc-website-2024.vercel.app/",
        siteName: "GDSC x VIT Bhopal University",
        images: [
            {
                url: "/logo-design.svg",
                width: 800,
                height: 600,
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <>
                    <Navbar />
                    {children}
                    <Connect />
                </>
            </body>
        </html>
    );
}
