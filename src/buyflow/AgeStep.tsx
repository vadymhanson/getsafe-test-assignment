import React from 'react';

interface AgeStepProps {
  callback: (value: string) => void
}

const AgeStep: React.FC<AgeStepProps> = ({ callback }) => {
  const handleNextClick = () => {
    const ageInput = document.getElementById('age') as HTMLInputElement;
    const age = ageInput.value;
    if (age === '') {
      alert('Please enter your age');
      return;
    }
    callback(age);
  }

  return (
    <>
      <div>
        <label htmlFor="age">Age:{' '}</label>
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
