import React, { useState } from 'react';
import { ProductStep } from '../types/types';

interface EmailStepProps {
  callback: (field: ProductStep, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('')
  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
        ></input>
      </div>
      <button onClick={() => props.callback('email', email)}>Next</button>
    </>
  )
}

export default EmailStep
