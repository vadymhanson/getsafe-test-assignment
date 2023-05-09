import { ProductId } from "./interfaces";

export type ProductStep = 'name' | 'email' | 'age' | 'summary';

export type ProductSteps = {
  [type in keyof ProductId]:  ProductStep[];
};

export type CallbackValue = { field: string, value: string };

