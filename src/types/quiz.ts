export type OptionVariant = "default" | "green" | "yellow" | "red";

export type Option = {
    id: string;
    label: string;
    variant?: OptionVariant;
    icon: string;
};