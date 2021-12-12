import React, { createContext, useState } from 'react'
import { NumberContext } from './context'

// export const NumberContext = createContext()

export default function NumberProvider({ children }) {
    const [number, setNumber] = useState('')
    const [storedNumber, setStoredNumber] = useState('')
    const [functionType, setFunctionType] = useState('')

    const handleSetDisplayValue = (num) => {
        // задает значение, выводимое на экран
        // проверяем, что только один десятичный знак и длина чилса 8 символов
        if ((!number.includes('.') || num !== '.') && number.length < 8) {
            setNumber(`${(number + num).replace(/^0+/, '')}`)
        }
    }

    const handleSetStoredValue = () => {
        // сохрянает строку и позволяет ввести другое значение
        setStoredNumber(number)
        setNumber('')
    }

    const handleClearValue = () => {
        // сбрасывает все к 0
        setNumber('')
        setStoredNumber('')
        setFunctionType('')
    }

    const handleBackButton = () => {
        // удаляет посл введеное число по одному
        if (number !== '') {
            const deletedNumber = number.slice(0, number.length - 1)
            setNumber(deletedNumber)
        }
    }

    const handleSetCalcFunction = (type) => {
        // срабатывает при выборе мат функции
        if (number) {
            setFunctionType(type)
            handleSetStoredValue()
        }
        if (storedNumber) {
            setFunctionType(type)
        }
    }

    const handleToggleNegative = () => {
        // оперирует отображаемым и сохраненным значениями
        if (number) {
            if (number > 0) {
                setNumber(`-${number}`)
            } else {
                const positiveNumber = number.slice(1)
                setNumber(positiveNumber)
            }
        } else if (storedNumber > 0) {
            setStoredNumber(`-${storedNumber}`)
        } else {
            const positiveNumber = storedNumber.slice(1)
            setStoredNumber(positiveNumber)
        }
    }

    const doMath = () => {
        if (number && storedNumber) {
            switch (functionType) {
                case '+':
                    setStoredNumber(
                        `${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`
                    )
                    break
                case '-':
                    setStoredNumber(
                        `${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 100}`) / 100}`
                    )
                    break
                case '*':
                    setStoredNumber(
                        `${Math.round(`${(parseFloat(storedNumber) * parseFloat(number)) * 1000}`) / 1000}`
                    )
                    break
                case '/':
                    setStoredNumber(
                        `${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`
                    )
                    break
                default: 
                    break
            }
            setNumber('')
        }
    }

    return (
        <NumberContext.Provider
            value={{ 
                number,
                setNumber,
                storedNumber,
                functionType,
                doMath,
                handleSetDisplayValue,
                handleSetStoredValue,
                handleToggleNegative,
                handleSetCalcFunction,
                handleClearValue,
                handleBackButton
            }}
        >
            {children}
        </NumberContext.Provider>
    )
}
