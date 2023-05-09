import React, { useState } from 'react'
import { ProductStep } from '../types/types'

interface AgeStepProps {
  callback: (field: ProductStep, value: number) => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0)
  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value))
          }}
          value={age}
        ></input>
      </div>
      <button onClick={() => props.callback('age', age)}>Next</button>
    </>
  )
}

export default AgeStep
