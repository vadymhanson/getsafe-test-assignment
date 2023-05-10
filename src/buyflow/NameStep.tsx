import React from 'react';

interface NameStepProps {
  callback: (value: string) => void
}

const NameStep: React.FC<NameStepProps> = ({ callback }) => {
  const handleNextClick = () => {
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    if (firstName === ''  || lastName === '') {
      alert('Please enter your name');
      return;
    }
    callback(`${firstName} ${lastName}`);
  }

  return (
    <>
      <div>
        <label htmlFor="firstName">First name:{' '}</label>
        <input type="text" id="firstName" />
      </div>
      <div>
        <label htmlFor="lastName">Last name:{' '}</label>
        <input type="text" id="lastName" />
      </div>
      <button onClick={handleNextClick}>Next</button>
    </>
  );
}

export default NameStep;
