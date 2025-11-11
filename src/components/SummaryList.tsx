import React from "react";
import { SummaryItem } from "../types/checkout";

type SummaryListProps = {
    items: SummaryItem[];
};

const SummaryList: React.FC<SummaryListProps> = ({ items }) => {
    return (
        <div className="w-[335px] h-[312px] flex flex-col gap-[8px]">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="w-[335px] h-[72px] rounded-[8px] border border-[#767AF9] bg-[#F9F6F4] flex items-center px-[12px] py-[16px] gap-[16px]"
                >
                    <div className="w-[40px] h-[40px] flex items-center justify-center">
                        <img src={item.icon} alt={item.title} />
                    </div>


                    <div className="w-[311px] h-[40px] flex items-center">
                        <div className="w-[107px] h-[40px] flex flex-col gap-[4px]">
                            <div className={`flex items-center justify-center rounded-[4px] ${item.levelBgClass} h-[16px] px-[4px] py-[2px]`}
                                style={{ width: `${item.fillWidth}px` }}
                            >
                                <span className="font-figtree font-bold text-[10px] leading-[12px] uppercase text-white whitespace-nowrap">
                                    {item.levelLabel}
                                </span>
                            </div>

                            <span className="font-figtree font-bold text-[16px] leading-[20px] text-[#303030] whitespace-nowrap">
                                {item.title}
                            </span>
                        </div>

                        <div className="w-[24px]" />

                        <div className="w-[128px] h-[16px] flex items-center gap-[12px]">
                            <div className="w-[88px] h-[6px] rounded-full bg-[#E4E4E4]">
                                <div
                                    className={`h-[6px] rounded-full ${item.barBgClass}`}
                                    style={{ width: `${item.percent}%` }}
                                />
                            </div>

                            <span className="font-figtree font-bold text-[16px] leading-[20px] text-[#303030]">
                                {item.percent}%
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SummaryList;
