import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import TopBar from "../components/TopBar";
import ProgressBar from "../components/ProgressBar";
import OptionButtonYesNo from "../components/OptionButtonYesNo";
import OptionButtonMultiple from "../components/OptionButtonMultiple";
import { Option } from "../types/quiz";
import healthIcon from "../assets/icons/quiz/icon-health.svg";
import relationshipsIcon from "../assets/icons/quiz/icon-relationships.svg";
import controlIcon from "../assets/icons/quiz/icon-control.svg";
import moneyIcon from "../assets/icons/quiz/icon-money.svg";
import performanceIcon from "../assets/icons/quiz/icon-performance.svg";
import roleModelIcon from "../assets/icons/quiz/icon-role-model.svg";
import stressIcon from "../assets/icons/quiz/icon-stress.svg";
import socializingIcon from "../assets/icons/quiz/icon-socializing.svg";
import relaxationIcon from "../assets/icons/quiz/icon-relaxation.svg";
import escapeIcon from "../assets/icons/quiz/icon-escape.svg";
import habitIcon from "../assets/icons/quiz/icon-habit.svg";
import confidenceIcon from "../assets/icons/quiz/icon-confidence.svg";
import yesIcon from "../assets/icons/quiz/icon-yes.svg";
import notSureIcon from "../assets/icons/quiz/icon-not-sure.svg";
import noIcon from "../assets/icons/quiz/icon-no.svg";

type Question = {
    id: number;
    text: string;
    options: Option[];
};

const QUESTIONS: Question[] = [
    {
        id: 1,
        text: "What is your main reason for wanting to quit drinking?",
        options: [
            { id: "health", label: "Health", icon: healthIcon },
            { id: "relationships", label: "Relationships", icon: relationshipsIcon },
            { id: "control", label: "Control", icon: controlIcon },
            { id: "money", label: "Money", icon: moneyIcon },
            { id: "performance", label: "Performance", icon: performanceIcon },
            { id: "role-model", label: "Role model", icon: roleModelIcon },
        ],
    },
    {
        id: 2,
        text: "What do you think is the main reason you drink?",
        options: [
            { id: "stress", label: "Stress or anxiety", icon: stressIcon },
            { id: "socializing", label: "Socializing", icon: socializingIcon },
            { id: "relaxation", label: "Relaxation", icon: relaxationIcon },
            { id: "escape", label: "Emotional escape", icon: escapeIcon },
            { id: "habit", label: "Habit", icon: habitIcon },
            { id: "confidence", label: "Confidence boost", icon: confidenceIcon },
        ],
    },
    {
        id: 3,
        text: 'Do you ever drink to feel "normal" or fit in with others?',
        options: [
            { id: "yes", label: "Yes", variant: "green", icon: yesIcon },
            { id: "not-sure", label: "I’m not sure", variant: "yellow", icon: notSureIcon },
            { id: "no", label: "No", variant: "red", icon: noIcon  },
        ],
    },
    {
        id: 4,
        text: "Do you sometimes feel like you're missing out if you don't participate in group activities or social events?",
        options: [
            { id: "yes", label: "Yes", variant: "green", icon: yesIcon },
            { id: "not-sure", label: "I’m not sure", variant: "yellow", icon: notSureIcon },
            { id: "no", label: "No", variant: "red", icon: noIcon  },
        ],
    },
    {
        id: 5,
        text: "Do you often find yourself wanting to escape from your daily responsibilities or pressures?",
        options: [
            { id: "yes", label: "Yes", variant: "green", icon: yesIcon },
            { id: "not-sure", label: "I’m not sure", variant: "yellow", icon: notSureIcon },
            { id: "no", label: "No", variant: "red", icon: noIcon  },
        ],
    },
    {
        id: 6,
        text: "Do you often seek ways to relax or unwind after a long, stressful day?",
        options: [
            { id: "yes", label: "Yes", variant: "green", icon: yesIcon },
            { id: "not-sure", label: "I’m not sure", variant: "yellow", icon: notSureIcon },
            { id: "no", label: "No", variant: "red", icon: noIcon  },
        ],
    },
];

const QuizPage: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [answers, setAnswers] = useState<(string | null)[]>(
        Array(QUESTIONS.length).fill(null)
    );

    const navigate = useNavigate();

    const currentQuestion: Question = QUESTIONS[currentQuestionIndex];
    const totalQuestions: number = QUESTIONS.length;
    const progress: number = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    // questions 3-6
    const isYesNoType: boolean = currentQuestion.id >= 3;

    //Saves selected option ID to the current question's answer.
    //After a short delay moves to the next question or checkout page if this was the last one.
    const handleSelectOption = (optionId: string) => {
        setAnswers((prev) => {
            const copy = [...prev];
            copy[currentQuestionIndex] = optionId;
            return copy;
        });

        setTimeout(() => {
            if (currentQuestionIndex < totalQuestions - 1) {
                setCurrentQuestionIndex((prev) => prev + 1);
            } else {
                navigate("/checkout")
            }
        }, 500);
    };

    const handleBack = () => {
        if (currentQuestionIndex === 0) {
            navigate("/");
        } else {
            setCurrentQuestionIndex((prev) => prev - 1);
        }
    };

    return (
        <div className="w-[375px] h-[640px] mx-auto bg-[#F9F6F4] flex flex-col items-center px-[20px] gap-[32px]">

            <div className="w-[335px] flex flex-col pt-[24px] gap-[13px]">
                <TopBar
                    showUnion={true}
                    questionNumber={currentQuestionIndex + 1}
                    totalQuestions={QUESTIONS.length}
                    onBack={handleBack}
                />

                <ProgressBar progress={progress}/>
            </div>

            {/* Content */}
            {/* Question 3-6 */}
            {isYesNoType ? (
                <div className="w-[335px] h-[515px] flex flex-col justify-between">
                    <div>
                        <h1 className="w-[335px] text-center font-figtree font-semibold text-[24px] leading-[28px] text-[#303030]">
                            {currentQuestion.text}
                        </h1>
                    </div>

                    <div className="w-[335px] flex flex-col gap-[8px]">
                        {currentQuestion.options.map((option) => {
                            const selected = answers[currentQuestionIndex] === option.id;

                            return (
                                <OptionButtonYesNo
                                    key={option.id}
                                    option={option}
                                    selected={selected}
                                    onSelect={handleSelectOption}
                                />
                            );
                        })}
                    </div>
                </div>
            ) : (
                // Questions 1-2
                <div className="w-[335px] h-[515px] flex flex-col gap-[24px] justify-between">

                    <h1 className="w-[335px] text-center font-figtree font-semibold text-[24px] leading-[28px] text-[#303030]">
                        {currentQuestion.text}
                    </h1>

                    <div className="w-[335px] h-[435px] flex flex-col gap-[8px] justify-end">
                        {currentQuestion.options.map((option) => {
                            const selected = answers[currentQuestionIndex] === option.id;

                            return (
                                <OptionButtonMultiple
                                    key={option.id}
                                    option={option}
                                    selected={selected}
                                    onSelect={handleSelectOption}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizPage;
