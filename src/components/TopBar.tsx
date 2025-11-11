import React from 'react';
import logo from "../assets/logo.svg";
import union from "../assets/union.svg";

type TopBarProps = {
    showUnion?: boolean;
    questionNumber?: number;
    totalQuestions?: number;
    onBack?: () => void
};

const TopBar: React.FC<TopBarProps> = ({showUnion = false, questionNumber, totalQuestions, onBack}) => {
    return (
    <div className="w-[335px] h-[36px] flex items-start justify-between">
        <div className="w-[48px] h-[13.47px] flex items-center">
            {showUnion && (
                <button type="button" onClick={onBack}>
                    <img
                        src={union}
                        alt="Back"
                        className="w-[24.77px] h-[13.47px]"
                    />
                </button>
            )}
        </div>

        <img
            src={logo}
            alt="Mellow Flow"
            className="w-[62px] h-[36px]"
        />

        <div className="w-[48px] h-[17px] flex items-center justify-end">
            <p className="font-poppins font-normal text-[16px] leading-[107%] text-[#303030] text-right">
                {questionNumber && (
                    <>
                        <span className="font-bold">{questionNumber}</span>
                        <span className="font-normal">/{totalQuestions}</span>
                    </>
                )}
            </p>
        </div>
    </div>
    )
}

export default TopBar;