import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import SummaryStep from './SummaryStep'

interface ProductId {
  developer: string;
  designer: string;
}

interface RouteParams {
  type: keyof ProductId;
}

export enum ProductIds {
  developer = "developer",
  designer = "designer",
}

const PRODUCT_IDS_TO_NAMES: ProductId = {
  [ProductIds.developer]: 'Developer Insurance',
  [ProductIds.designer]: 'Designer Insurance',

}

const Buyflow: React.FC = () => {
  const history = useHistory();
  const { type } = useParams<RouteParams>();
  const [currentStep, setStep] = useState('email')
  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
  })
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
  }

  if(!(type in ProductIds)) {
    history.push('/404');
  }
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[type]}</h4>
      {(currentStep === 'email' && <EmailStep cb={getStepCallback('age')} />) ||
        (currentStep === 'age' && (
          <AgeStep cb={getStepCallback('summary')} />
        )) ||
        (currentStep === 'summary' && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  )
}

export default Buyflow
