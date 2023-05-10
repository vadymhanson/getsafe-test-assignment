import React from 'react';


interface EmailStepProps {
  callback: (value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = ({ callback }) => {
  const handleNextClick = () => {
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const email = emailInput.value;
    if (email === '') {
      alert('Please enter your age');
      return;
    }
    callback(email);
  }

  return (
    <>
      <div>
        <label htmlFor="email">Email:{' '}</label>
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
