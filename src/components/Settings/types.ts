export interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  readOnly?: boolean;
}

export interface ToggleSwitchProps {
  label: string;
  subText: string;
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export interface PlanFeatureProps {
  text: string;
  isIncluded: boolean;
}

export interface PlanCardProps {
  title: string;
  price: number;
  description: string;
  isPopular: boolean;
  features: { text: string; isIncluded: boolean }[];
  buttonText: string;
  buttonColor: string;
}
