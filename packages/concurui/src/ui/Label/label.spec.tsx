import { render } from '@testing-library/react'

import { Label } from './label'

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Label />)
    expect(baseElement).toBeTruthy()
  })
})
