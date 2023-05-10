import React from 'react';
import { ProductStep } from '../types/types';

interface EmailStepProps {
  callback: (field: ProductStep, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = ({ callback }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    callback('email', event.target.value);
  }

  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={handleInputChange}
        ></input>
      </div>
      <button onClick={() => callback('email', '')}>Next</button>
    </>
  );
}

export default EmailStep;
