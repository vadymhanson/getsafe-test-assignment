import React, { useRef } from 'react';

interface StepProps {
  label: string;
  inputType: string;
  callback: (value: string) => void;
}

const Step: React.FC<StepProps> = ({ label, inputType, callback }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleNextClick = () => {
    const input = inputRef.current;
    if (!input || !input.value.trim()) {
      alert(`Please enter your ${label.toLowerCase()}`);
      return;
    }
    callback(input.value.trim());
  };

  return (
    <>
      <div>
        <label htmlFor="input">{label}:{' '}</label>
        <input type={inputType} id="input" ref={inputRef} />
      </div>
      <button onClick={handleNextClick}>Next</button>
    </>
  );
};

export default Step;
