import React, { useContext } from 'react'
import { NumberContext } from './context'

export default function EqualButton() {
    const {doMath} = useContext(NumberContext)

    return (
        <button
            className='white-button'
            type='button'
            onClick={() => doMath()}
        >
            =
        </button>
    )
}
