import React from "react";

type ProgressBarProps = {
    progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({progress}) => {
    return (
        <div className="w-[335px] h-[3px] relative overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-[#E4E4E4] rounded-full" />
            <div
                className="absolute top-0 left-0 h-[3px] bg-[#767AF9] rounded-full transition-all duration-300"
                style={{width: `${progress}%`}}
            />
        </div>
    )
}

export default ProgressBar;