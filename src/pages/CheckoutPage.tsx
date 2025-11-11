import React from "react";
import CheckOutTopBar from "../components/CheckOutTopBar";
import SummaryList from "../components/SummaryList";
import { Gender } from "../App";
import femaleAfter from "../assets/female-after.svg";
import maleAfter from "../assets/male-after.svg";
import iconDesireToChange from "../assets/icons/checkout/icon-desire-to-change.svg";
import iconCravings from "../assets/icons/checkout/icon-cravings.svg";
import iconMentalBlocks from "../assets/icons/checkout/icon-mental-blocks.svg";
import iconStress from "../assets/icons/checkout/icon-stress.svg";
import CheckOutSection from "../components/CheckOutSection";
import { SummaryItem } from "../types/checkout";

const SUMMARY_ITEMS: SummaryItem[] = [
    {
        id: "desire-change",
        title: "Desire to change",
        levelLabel: "VERY STRONG",
        levelBgClass: "bg-[#289F67]",
        barBgClass: "bg-[#289F67]",
        percent: 92,
        icon: iconDesireToChange,
        fillWidth: 78,
    },
    {
        id: "cravings",
        title: "Cravings",
        levelLabel: "TOO HIGH",
        levelBgClass: "bg-[#E35244]",
        barBgClass: "bg-[#E35244]",
        percent: 84,
        icon: iconCravings,
        fillWidth: 58,
    },
    {
        id: "mental-blocks",
        title: "Mental blocks",
        levelLabel: "TOO HIGH",
        levelBgClass: "bg-[#E35244]",
        barBgClass: "bg-[#E35244]",
        percent: 74,
        icon: iconMentalBlocks,
        fillWidth: 58,
    },
    {
        id: "stress",
        title: "Stress",
        levelLabel: "MODERATELY HIGH",
        levelBgClass: "bg-[#FFC633]",
        barBgClass: "bg-[#FFC633]",
        percent: 52,
        icon: iconStress,
        fillWidth: 102,
    },
];

type CheckoutPageProps = {
    selectedGender: Gender | null;
};

const CheckoutPage: React.FC<CheckoutPageProps> = ({ selectedGender }) => {

    const afterImage = selectedGender === "male" ? maleAfter : femaleAfter;
    const afterAlt = selectedGender === "male" ? "After (male plan)" : "After (female plan)";

    return (
        <div className="w-[375px] h-[931px] bg-[#F9F6F4] flex flex-col items-center">
            <CheckOutTopBar text={"Reserved price for:"} />

            <div className="w-[375px] h-[855px] flex flex-col items-center pt-[40px] px-[20px] pb-[24px]">

                <div className="w-[335px] h-[791px] flex flex-col gap-[40px]">

                    {/*1st content block*/}
                    <div className="w-[335px] h-[387px] flex flex-col gap-[24px]">
                        <h1 className="w-[335px] h-[56px] font-figtree font-bold text-[24px] leading-[28px] text-[#303030]">
                            Your personalized Alcohol-Free Plan is ready!
                        </h1>

                        <CheckOutSection/>

                        {/*Before/after dynamic picture*/}
                        <div className="w-[335px] h-[240px]">
                            <img
                                src={afterImage}
                                alt={afterAlt}
                                className="w-[335px] h-[240px] object-cover"
                            />
                        </div>
                    </div>

                    {/* 2nd content block */}
                    <div className="w-[335px] h-[364px] flex flex-col gap-[24px]">
                        <h2 className="w-[335px] h-[28px] font-figtree font-bold text-[24px] leading-[28px] text-[#303030]">
                            Your Personal Summary
                        </h2>

                        <SummaryList items={SUMMARY_ITEMS} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
