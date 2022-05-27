import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import App from '../src/App'

describe('Testing render', () => {
    it('Renders App component', () => {
        render(<App />)
    })
});