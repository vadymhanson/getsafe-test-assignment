import React, { useState } from 'react';
import PropTypes from 'prop-types';

interface EmailStepProps {
  cb: (field: string, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('')
  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
        ></input>
      </div>
      <button onClick={() => props.cb('email', email)}>Next</button>
    </>
  )
}

EmailStep.propTypes = {
  cb: PropTypes.func.isRequired,
};

export default EmailStep
