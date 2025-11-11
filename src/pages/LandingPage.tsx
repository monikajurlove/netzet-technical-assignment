import React from 'react';
import { useNavigate } from "react-router-dom";
import malePicture from '../assets/male.svg';
import femalePicture from '../assets/female.svg';
import TopBar from '../components/TopBar';
import GenderCard from '../components/GenderCard';
import { Gender } from '../App';

type LandingPageProps = {
    selectedGender: Gender | null;
    setSelectedGender: React.Dispatch<React.SetStateAction<Gender | null>>;
};

const LandingPage: React.FC<LandingPageProps> = ({ selectedGender, setSelectedGender }) => {

    const navigate = useNavigate();

    const handleSelect = (gender: Gender) => {
        setSelectedGender(gender);
        setTimeout(() => {
            navigate('/quiz');
        }, 500);
    };

    return (
        <div className="w-[375px] h-[640px] mx-auto bg-[#F9F6F4] flex flex-col items-center px-[20px] gap-[32px]">

            <div className="w-[335px] h-[60px] flex flex-col justify-end">
                <TopBar/>
            </div>

            <div className="w-[335px] h-[528px] flex flex-col gap-[32px]">

                {/* Title + Subtitle */}
                <div className="w-[335px] h-[58px] gap-[12px] flex flex-col justify-between">
                    <h1 className="w-[335px] h-[28px] font-figtree text-center text-[24px] leading-[28px] font-semibold text-[#303030]">
                        What is your gender?
                    </h1>
                    <p className="w-[335px] h-[18px] mt-[2px] font-figtree text-center text-[14px] leading-[18px] font-normal text-[#303030]">
                        We will use this to personalize your plan
                    </p>
                </div>

                {/* Gender cards */}
                <div className="w-full h-[446px] flex justify-between items-center">
                    <GenderCard
                        label="Male"
                        image={malePicture}
                        gender="male"
                        selectedGender={selectedGender}
                        onSelect={handleSelect}
                    />
                    <GenderCard
                        label="Female"
                        image={femalePicture}
                        gender="female"
                        selectedGender={selectedGender}
                        onSelect={handleSelect}
                    />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
