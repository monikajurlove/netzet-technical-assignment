import React from "react";
import iconDrinkingPatterns from "../assets/icons/checkout/icon-drinking-patterns.svg";
import iconGoal from "../assets/icons/checkout/icon-goal.svg";

const CheckOutSection: React.FC =  () => {
    return (
        <div className="w-[335px] h-[43px] flex gap-[20px] items-center">
            <div className="w-[147.5px] h-[32px] flex items-center gap-[8px] rounded-[8px]">
                <img
                    src={iconDrinkingPatterns}
                    alt="Drinking patterns"
                    className="w-[32px] h-[32px]"
                />
                <div className="flex flex-col  leading-[14px]">
                    <span className="font-figtree text-[10px] text-[#303030] leading-[12px]">Drinking patterns</span>
                    <span className="font-figtree font-semibold text-[12px] text-[#303030]">Imbalanced</span>
                </div>
            </div>

            <div className="h-[43px] w-0 border-[1px] border-[#767AF9]"></div>

            <div className="w-[147.5px] h-[40px] flex items-center gap-[8px] rounded-[8px]">
                <img
                    src={iconGoal}
                    alt="Goal"
                    className="w-[24px] h-[24px]"
                />
                <div className="flex flex-col leading-[14px]">
                    <span className="font-figtree text-[10px] text-[#7A7A7A]">Goal</span>
                    <span className="font-figtree font-semibold text-[12px] text-[#303030]">Regain control and live alcohol-free</span>
                </div>
            </div>
        </div>
    )
}

export default CheckOutSection;