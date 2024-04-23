export const MemberCard = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 w-[210px]">
            <div className="w-[150px] h-[150px] rounded-full border-2 border-black shadow-[-5px_5px_0px_0px_#000]"></div>
            <div className="flex flex-col items-center justify-center">
                <div className="font-medium text-lg">name goes here</div>
                <div className="text-gray-600 text-sm">position goes here</div>
            </div>
        </div>
    );
};
