import React, { useContext } from 'react'
import { NumberContext } from './context'
import styled from 'styled-components'

const DisplayStyles = styled.div`
    display: grid;
    grid-template-rows: 90px 50px;
    grid-template-columns: 1fr;
    border: 4px solid white;
    width: 700px;
    margin: 10px auto;
    align-items: center;
    border-radius: 20px;
    background: #e17055;

    h2, p {
        text-align: center;
        color: white;
    }

    h2 {
        font-size: 3rem;
        margin: 0;
        text-align: right;
        padding: 0px;
        border-bottom: 4px solid white;
        padding: 15px 20px;
    }

    p {
        margin: 5px 0;
    }
`

export default function Display() {
    const { number, storedNumber, functionType } = useContext(NumberContext)

    return (
        <DisplayStyles>
            <h2>{!number.length && !storedNumber ? '0' : number || storedNumber}</h2>
            <p>{!storedNumber ? 'Enter some numbers' : `${storedNumber} ${functionType} ${number}`}</p>
        </DisplayStyles>
    )
}
