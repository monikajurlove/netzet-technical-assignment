import React from "react";

type Option = {
    id: string;
    label: string;
    icon?: string;
};

type OptionButtonMultipleProps ={
    option: Option;
    selected: boolean;
    onSelect: (id: string) => void;
}

const OptionButtonMultiple: React.FC<OptionButtonMultipleProps> = ({  option, selected, onSelect}) => {

    const baseClasses =
        "w-full h-[56px] rounded-[12px] border flex items-center px-[16px] text-[16px] leading-[20px] font-medium transition-colors";

    const colorClasses = selected
        ? "border-[#7D5CFF] bg-[#7D5CFF] text-white"
        : "border-[#E3E3E3] bg-white text-[#303030]";

    return(
        <button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            className={`${baseClasses} ${colorClasses}`}
        >
            {option.icon && (
                <img
                    src={option.icon}
                    alt=""
                    className="w-[24px] h-[24px] mr-[12px]"
                    style={{ filter: selected ? "brightness(0) invert(1)" : "none" }}
                />
            )}

            <span>{option.label}</span>
        </button>
    )
};
export default OptionButtonMultiple;