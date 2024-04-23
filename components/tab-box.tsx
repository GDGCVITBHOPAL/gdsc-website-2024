"use client";

import { blogs, events } from "@/lib/data";
import { useState } from "react";
import { Card, CardData } from "./card";

export const TabBox = () => {
    const [tabValue, setTabValue] = useState("event");
    return (
        <div className="w-full h-fit flex items-center justify-center">
            <div className="w-fit flex flex-col items-center justify-center mb-16 max-[1000px]:px-8">
                <div className="w-full h-28 flex items-center justify-center gap-10 *:w-fit *:h-fit *:py-3 *:px-10 *:rounded-2xl *:transition-colors *:font-medium *:text-lg *:shadow-[-5px_5px_0px_0px_#000]">
                    <button
                        onClick={() => setTabValue("event")}
                        className={`hover:transform hover:translate-x-[5px] hover:translate-y-[-5px]
                                ${
                                    tabValue == "event"
                                        ? "border-2 border-black bg-white"
                                        : "bg-gray-300"
                                }`}
                    >
                        Events
                    </button>
                    <button
                        onClick={() => setTabValue("blog")}
                        className={`hover:transform hover:translate-x-[5px] hover:translate-y-[-5px]
                                ${
                                    tabValue == "blog"
                                        ? "border-2 border-black bg-white"
                                        : "bg-gray-300"
                                }`}
                    >
                        Blogs
                    </button>
                </div>
                <div className="p-10 bg-white flex flex-col gap-6 peer border-2 border-black rounded-2xl shadow-[-5px_5px_0px_0px_#000] max-[1000px]:px-7">
                    <div className="text-3xl font-semibold">
                        Recent {tabValue == "event" ? "Events" : "Blogs"}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-10">
                        {tabValue == "event"
                            ? events.map((event: CardData, id) => (
                                  <Card data={event} key={id} />
                              ))
                            : blogs.map((event: CardData, id) => (
                                  <Card data={event} key={id} />
                              ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
