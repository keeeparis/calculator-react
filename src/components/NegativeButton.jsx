import React, { useContext } from 'react'
import { NumberContext } from './context'

export default function NegativeButton() {
    const { handleToggleNegative } = useContext(NumberContext)
    return (
        <button
            type='button'
            className='white-button'
            onClick={() => handleToggleNegative()}
        >
            -/+
        </button>
    )
}
