import React, { useContext } from 'react'
import { NumberContext } from './context'

export default function NumberButton({ buttonValue }) {
    const { handleSetDisplayValue } = useContext(NumberContext)

    return (
        <button type='button' onClick={() => handleSetDisplayValue(buttonValue)}>
            {buttonValue}
        </button>
    )
}
