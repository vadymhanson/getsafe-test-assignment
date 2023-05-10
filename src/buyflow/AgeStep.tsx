import React from 'react';

interface AgeStepProps {
  callback: (value: string) => void
}

const AgeStep: React.FC<AgeStepProps> = ({ callback }) => {
  const handleNextClick = () => {
    const ageInput = document.getElementById('age') as HTMLInputElement;
    const age = ageInput.value;
    callback(age);
  }

  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          id="age"
        ></input>
      </div>
      <button onClick={handleNextClick}>Next</button>
    </>
  );
}

export default AgeStep;
