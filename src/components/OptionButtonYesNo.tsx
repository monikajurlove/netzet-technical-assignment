import React from "react";
import { Option } from "../types/quiz";

type OptionButtonYesNoProps = {
    option: Option;
    selected: boolean;
    onSelect: (id: string) => void;
};

const OptionButtonYesNo: React.FC<OptionButtonYesNoProps> = ({option, selected, onSelect,}) => {
    let base = "w-full flex items-center justify-start rounded-[8px] border px-[20px] py-[16px] gap-[16px] text-[16px] leading-[20px] font-figtree font-semibold transition-all duration-200";
    let style = "";

    switch (option.variant) {
        case "green":
            style = selected
                ? "bg-[#289F67] border-[#289F67] text-white"
                : "bg-white border-[#289F67] text-[#303030]";
            break;
        case "yellow":
            style = selected
                ? "bg-[#FFC633] border-[#FFC633] text-white"
                : "bg-white border-[#FFC633] text-[#303030]";
            break;
        case "red":
            style = selected
                ? "bg-[#E35244] border-[#E35244] text-white"
                : "bg-white border-[#E35244] text-[#303030]";
            break;
        default:
            style = "bg-white border-[#E3E3E3] text-[#303030]";
    }

    return (
        <button
            type="button"
            onClick={() => onSelect(option.id)}
            className={`${base} ${style}`}
        >
            {option.icon && (
                <img
                    src={option.icon}
                    alt=""
                    className="w-[16px] h-[16px]"
                    style={{filter: selected ? "brightness(0) invert(1)" : "none",}}
                />
            )}
            <span>{option.label}</span>
        </button>
    );
};

export default OptionButtonYesNo;
