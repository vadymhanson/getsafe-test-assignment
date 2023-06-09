import { ProductId, ProductSteps } from "../types/types";

export enum ProductIds {
  developer = 'developer',
  designer = 'designer',
}

export const PRODUCT_IDS_TO_NAMES: ProductId = {
  [ProductIds.developer]: 'Developer Insurance',
  [ProductIds.designer]: 'Designer Insurance',
};

export const BuyflowSteps: ProductSteps = {
  [ProductIds.developer]: ['email', 'age', 'summary'],
  [ProductIds.designer]: ['name','email','age','summary']
};

export const Steps = {
  name:'name',
  email:'email',
  age:'age',
  summary:'summary'
};