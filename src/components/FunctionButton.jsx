import React, { useContext } from 'react'
import { NumberContext } from './context'

export default function FunctionButton({ buttonValue }) {
    const { handleSetCalcFunction } = useContext(NumberContext)

    return (
        <button
            type='button'
            className='function-button'
            onClick={() => handleSetCalcFunction(buttonValue)}
        >
            {buttonValue}
        </button>
    )
}
