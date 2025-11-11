import React from "react";
import { Gender } from '../App';

type CardProps = {
    label: string;
    image: string;
    gender: Gender;
    selectedGender: Gender | null;
    onSelect: (gender: Gender) => void;
};

const GenderCard: React.FC<CardProps> = ({ label, image, gender, selectedGender, onSelect }) => {
    const isSelected = selectedGender === gender;

    return (
        <div
            onClick={() => onSelect(gender)}
            className={`flex flex-col w-[162px] h-[200px] rounded-[10px] overflow-hidden border-2 transition-transform duration-200 cursor-pointer
            ${isSelected ? 'border-[#289F67] bg-[#289F67] scale-105' : 'border-[#5A4EF3] bg-[#5A4EF3]'}`}
        >
            <div className="flex-1 w-full bg-[#F3F0FF] flex items-center justify-center">
                <img
                    src={image}
                    alt={label}
                    className="block w-[160px] h-[140px] object-cover"
                />
            </div>

            <div
                className={`w-full h-[60px] flex justify-center items-center rounded-b-[10px]
                ${isSelected ? 'bg-[#289F67]' : 'bg-[#5A4EF3]'}`}>
                <span className="text-white text-[16px] font-medium text-center">{label}</span>
            </div>
        </div>
    );
};

export default GenderCard;