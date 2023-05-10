import React from 'react';


interface EmailStepProps {
  callback: (value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = ({ callback }) => {
  const handleNextClick = () => {
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const email = emailInput.value;
    callback(email);
  }

  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          id="email"
        ></input>
      </div>
      <button onClick={handleNextClick}>Next</button>
    </>
  );
}

export default EmailStep;
