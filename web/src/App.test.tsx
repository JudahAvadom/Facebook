import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import App from './App'

test('renders content', () => {
    const note = {
        content: 'This is a test',
        important: true
    }
    const component = render(<App />)
    expect(component.container).toHaveTextContent('Hola')
})