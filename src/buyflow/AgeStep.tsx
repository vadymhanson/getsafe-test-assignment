import React from 'react';
import { ProductStep } from '../types/types';

interface AgeStepProps {
  callback: (field: ProductStep, value: number) => void
}

const AgeStep: React.FC<AgeStepProps> = ({ callback }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    callback('age', Number(event.target.value));
  }

  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={handleInputChange}
        ></input>
      </div>
      <button onClick={() => callback('age', 0)}>Next</button>
    </>
  );
}

export default AgeStep;
