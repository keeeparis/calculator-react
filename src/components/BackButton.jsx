import React, { useContext } from 'react'
import { NumberContext } from './context'

export default function BackButton() {
    const { handleBackButton } = useContext(NumberContext)

    return (
        <button 
            type='button' 
            className='white-button'
            onClick={() => handleBackButton()}
        >
            &#8592;
        </button>
    )
}
