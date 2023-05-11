import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BuyflowSteps, ProductIds, PRODUCT_IDS_TO_NAMES, Steps } from '../utils/constants';
import { RouteParams } from '../types/types';
import NameStep from './ByflowSteps/NameStep';
import SummaryStep from './ByflowSteps/SummaryStep';
import Step from './ByflowSteps/Step';

const Buyflow: React.FC = () => {
  const history = useHistory();
  const { type } = useParams<RouteParams>();
  const [currentStepIndex, setStepIndex] = useState(0);
  const [collectedData, setData] = useState({
    email: '',
    age: 0,
    name: ''
  });

  if (!(type in ProductIds)) {
    history.push('/404');
    return null;
  }

  const currentSteps = BuyflowSteps[type];
  const currentStep = currentSteps[currentStepIndex];

  const getNextStepCallback = (nextStepIndex: number) => (value: string| number) => {
    setData({ ...collectedData, [currentStep]: value });
    setStepIndex(nextStepIndex);
  };

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[type]}</h4>
      {(currentStep === Steps.name && <NameStep callback={getNextStepCallback(currentStepIndex + 1)} />)}
      {(currentStep === Steps.email && <Step label="Email" inputType="email" callback={getNextStepCallback(currentStepIndex + 1)} />)}
      {(currentStep === Steps.age && <Step label="Age" inputType="number" callback={getNextStepCallback(currentStepIndex + 1)} />)}
      {(currentStep === Steps.summary && <SummaryStep collectedData={collectedData} />)}
    </>
  );
};

export default Buyflow;
