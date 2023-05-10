import React from 'react'
import { Link } from 'react-router-dom'

interface SummaryStepProps {
  collectedData: {
    email: string
    age: number
    name?: string
  }
}

const SummaryStep: React.FC<SummaryStepProps> = ({collectedData}) => {
  const {name, email, age} = collectedData;

  return (
    <>
      {name && <div>Name: {name}</div>}
      {email && <div>Email: {email}</div>}
      {!!age && <div>Age: {age}</div>}
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
};

export default SummaryStep;
