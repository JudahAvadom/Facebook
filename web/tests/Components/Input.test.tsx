import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import { Input } from '../../src/Components/util/Input'

describe('Testing render', () => {
    it('Renders App component', () => {
        render(<Input />)
    })
});