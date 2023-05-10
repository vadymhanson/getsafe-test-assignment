import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BuyflowSteps, ProductIds, PRODUCT_IDS_TO_NAMES } from '../utils/constants';
import NameStep from './NameStep';
import AgeStep from './AgeStep';
import EmailStep from './EmailStep';
import SummaryStep from './SummaryStep';
import { RouteParams } from '../types/interfaces';

const Buyflow: React.FC = () => {
  const history = useHistory();
  const { type } = useParams<RouteParams>();
  const [currentStepIndex, setStepIndex] = useState(0);
  const [collectedData, setData] = useState({
    email: '',
    age: 0,
    name: ''
  });
  const currentSteps = BuyflowSteps[type];
  const currentStep = currentSteps[currentStepIndex];

  if (!(type in ProductIds)) {
    history.push('/404');
  }

  const getNextStepCallback = (nextStepIndex: number) => (value: string| number) => {
    setData({ ...collectedData, [currentStep]: value });
    setStepIndex(nextStepIndex);
  };

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[type]}</h4>
      {(currentStep === 'name' && <NameStep callback={getNextStepCallback(currentStepIndex + 1)} />)}
      {(currentStep === 'email' && <EmailStep callback={getNextStepCallback(currentStepIndex + 1)} />)}
      {(currentStep === 'age' && <AgeStep callback={getNextStepCallback(currentStepIndex + 1)} />)}
      {(currentStep === 'summary' && <SummaryStep collectedData={collectedData} />)}
    </>
  );
};

export default Buyflow;
