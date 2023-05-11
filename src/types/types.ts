

export type ProductStep = 'name' | 'email' | 'age' | 'summary';

export type ProductSteps = {
  [type in keyof ProductId]:  ProductStep[];
};

export type CallbackValue = { field: string, value: string };

export interface ProductId {
  developer: string;
  designer: string;
}

export interface RouteParams {
  type: keyof ProductId;
}

export interface StepProps {
  label: string;
  inputType: string;
  callback: (value: string) => void;
}

export interface NameStepProps {
  callback: (value: string) => void
}

export interface SummaryStepProps {
  collectedData: {
    email: string
    age: number
    name?: string
  }
}

