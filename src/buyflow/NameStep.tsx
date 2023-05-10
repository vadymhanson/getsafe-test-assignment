import React from 'react';

interface NameStepProps {
  callback: (value: string) => void
}

const NameStep: React.FC<NameStepProps> = ({ callback }) => {
  const handleNextClick = () => {
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    callback(`${firstName} ${lastName}`);
  }

  return (
    <>
      <div>
        First name:{' '}
        <input type="text" id="firstName" />
      </div>
      <div>
        Last name:{' '}
        <input type="text" id="lastName" />
      </div>
      <button onClick={handleNextClick}>Next</button>
    </>
  );
}

export default NameStep;
