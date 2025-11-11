import React, {useEffect, useState} from "react";
import logo from "../assets/logo.svg";

const totalTime = 15 * 60;

type CheckOutTopBarProps = {
    text: string;
}

const CheckOutTopBar: React.FC<CheckOutTopBarProps> = ({text}) => {

    const [secondsLeft, setSecondsLeft] = useState(totalTime);

    //timer starts once component is loaded
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    return totalTime;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    //time formatting to XX:XX
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    return (
        <div className="w-[375px] h-[76px] bg-[#FFC633] flex items-center px-[20px]">
            <div className="w-full flex items-center justify-between">
                <img src={logo} alt="Mellow Flow" className="w-[62px] h-[36px]" />

                <div className="flex items-center gap-[10px] h-[28px]">
                    <h2 className="font-figtree font-bold text-[18px] leading-[22px] text-[#303030]">{text}</h2>

                    <div className="w-[61px] h-[28px] flex items-center justify-center">
                        <span className="font-figtree font-bold text-[24px] leading-[28px] text-[#6A61F1]">{formattedTime}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOutTopBar;