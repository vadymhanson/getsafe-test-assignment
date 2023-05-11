import React, { useRef } from 'react';
import { NameStepProps } from '../../types/types';


const NameStep: React.FC<NameStepProps> = ({ onNext }) => {

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const handleNextClick = () => {
    const firstNameInput = firstNameRef.current;
    const laststNameInput = lastNameRef.current;

    if (!firstNameInput
      || !laststNameInput
      || !firstNameInput.value.trim()
      || !laststNameInput.value.trim()
      ) {
      alert('Please enter your name');
      return;
    }
    onNext(`${firstNameInput.value.trim()} ${laststNameInput.value.trim()}`);
  }

  return (
    <>
      <div>
        <label htmlFor="firstName">First name:{' '}</label>
        <input type="text" id="firstName" ref={firstNameRef}/>
      </div>
      <div>
        <label htmlFor="lastName">Last name:{' '}</label>
        <input type="text" id="lastName" ref={lastNameRef} />
      </div>
      <button onClick={handleNextClick}>Next</button>
    </>
  );
}

export default NameStep;
