import React, { useContext } from 'react'
import { NumberContext } from './context'

export default function ClearButton() {
    const { handleClearValue } = useContext(NumberContext)

    return (
        <button 
            type='button' 
            className='white-button' 
            onClick={() => handleClearValue()}
        >
            C
        </button>
    )
}
