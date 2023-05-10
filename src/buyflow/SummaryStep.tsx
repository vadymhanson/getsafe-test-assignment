import React from 'react'
import { Link } from 'react-router-dom'

interface SummaryStepProps {
  collectedData: {
    email: string
    age: number
    firstName?: string
    lastName?: string
  }
}

const SummaryStep: React.FC<SummaryStepProps> = ({collectedData}) => {
  const {firstName, lastName, email, age} = collectedData

  return (
    <>
      {firstName && lastName && <div>Name: {firstName} {lastName}</div>}
      {email && <div>Email: {email}</div>}
      {age && <div>Age: {age}</div>}
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
};

export default SummaryStep;
