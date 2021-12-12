import React from 'react'
import styled from 'styled-components'

import Display from './Display'
import ClearButton from './ClearButton'
import BackButton from './BackButton'
import NegativeButton from './NegativeButton'
import FunctionButton from './FunctionButton'
import NumberButton from './NumberButton'
import EqualButton from './EqualButton'

const CalculatorStyles = styled.div`
    background-color: #4abdac;
    max-width: 100%;
    height: 100vh;
    display: grid;
    justify-items: center;
    grid-template-rows: minmax(200px, 350px) 1fr;
    grid-template-columns: 1fr;
`
const DisplayStyles = styled.div`
    font-family: 'Orbitron', serif;
    font-weight: 700;
    margin: 0 !important;
    width: 100%;

    h1 {
        font-size: 4rem;
        color: white;
        text-align: center;
    }
`
const NumpadStyles = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 0 30px;
    width: 450px;
    margin: 0 auto;

    button {
        width: 100%;
        height: 80px;
        border-radius: 20px;
        bordeR: 3px solid white; 
        font-size: 2rem;
        color: white;
        font-family: 'Orbitron', serif;
        background: #e17055;
        cursor: pointer;
        &:focus {
            outline: none;
        }
        &:hover {
            border: 3px solid #dfe6e9;
            font-weight: 500;
        }
        button.function-button {
            background-color: #2d3436;
        }
        button.white-button {
            color: #2d3436;
            background-color: white;
        }
    }
`
const ZeroButtonStyles = styled.div`
    grid-column: 1/3
`

export default function Calculator() {
    return (
        <CalculatorStyles>
            <DisplayStyles>
                <h1>Calc-u-Later</h1>
                <Display />
            </DisplayStyles>
            <NumpadStyles>
                <ClearButton />
                <BackButton />
                <NegativeButton />
                <FunctionButton buttonValue='/' />
                <NumberButton buttonValue='7' />
                <NumberButton buttonValue='8' />
                <NumberButton buttonValue='9' />
                <FunctionButton buttonValue='*' />
                <NumberButton buttonValue='4' />
                <NumberButton buttonValue='5' />
                <NumberButton buttonValue='6' />
                <FunctionButton buttonValue='-' />
                <NumberButton buttonValue='1' />
                <NumberButton buttonValue='2' />
                <NumberButton buttonValue='3' />
                <FunctionButton buttonValue='+' />
                <ZeroButtonStyles>
                    <NumberButton buttonValue='0'/>
                </ZeroButtonStyles>
                <NumberButton buttonValue='.'/>
                <EqualButton />
            </NumpadStyles>
        </CalculatorStyles>
    )
}
