import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AgeStep from './AgeStep';
import EmailStep from './EmailStep';
import SummaryStep from './SummaryStep';

type ProductStep = 'name' | 'email' | 'age' | 'summary';

type ProductSteps = {
  [type in keyof ProductId]:  ProductStep[];
};
interface ProductId {
  developer: string;
  designer: string;
}

interface RouteParams {
  type: keyof ProductId;
}

export enum ProductIds {
  developer = 'developer',
  designer = 'designer',
}

const PRODUCT_IDS_TO_NAMES: ProductId = {
  [ProductIds.developer]: 'Developer Insurance',
  [ProductIds.designer]: 'Designer Insurance',
};

const BuyflowSteps: ProductSteps = {
  [ProductIds.developer]: ['email', 'age', 'summary'],
  [ProductIds.designer]: ['name','email','age','summary']
};

const Buyflow: React.FC = () => {
  const history = useHistory();
  const { type } = useParams<RouteParams>();
  const [currentStepIndex, setStepIndex] = useState(0);
  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
    firstName: '',
    lastName: ''
  });
  const currentSteps = BuyflowSteps[type];
  const currentStep = currentSteps[currentStepIndex];

  if (!(type in ProductIds)) {
    history.push('/404');
  }

  const getNextStepCallback = (nextStepIndex: number) => (value: any) => {
    updateData({ ...collectedData, [currentStep]: value });
    setStepIndex(nextStepIndex);
  };

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[type]}</h4>
      {(currentStep === 'name' && <div>"HELLO"</div>)}
      {(currentStep === 'email' && <EmailStep cb={getNextStepCallback(currentStepIndex + 1)} />)}
      {(currentStep === 'age' && <AgeStep cb={getNextStepCallback(currentStepIndex + 1)} />)}
      {(currentStep === 'summary' && <SummaryStep collectedData={collectedData} />)}
    </>
  );
};

export default Buyflow;
