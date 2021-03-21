import * as Yup from 'yup';

interface Item {
  name: string;
  description: string;
  photoUri: string;
}

export interface Example {
  id: string;
  main: number;
}

export enum ButtonState {
  normal = 'normal',
  disabled = 'disabled',
  inverse = 'inverse',
}

export interface Product extends Item {}

export interface Service extends Item {}

export interface Experience extends Item {
  secondDescription: string;
}

export interface Company {
  id: number;
  name: string;
  description: string;
  products: Product[];
}

export interface Template {
  id: number;
  type: string;
  steps: number[];
  trackId?: number;
}

export interface Option {
  label: string;
  value: any;
}

export interface IntrinsicStepProps {
  currentStep: number;
  setCurrentStep: (n: number) => void;
}

export type SmartStep<Props = {}> = React.FC<Props & IntrinsicStepProps> & {
  validation?: Yup.ObjectSchema;
};

export interface ScreenComponent {
  img: string;
  Component: SmartStep;
  isCover?: boolean;
  hasCard?: boolean;
  cardWide?: boolean;
  cardImg?: string;
  hasMobileImg?: boolean;
  validation: Yup.ObjectSchema;
}

export interface ProductLine {
  name: string;
  products: Product[];
}

export interface Track {
  name: string;
  id: number;
  url: string;
}
