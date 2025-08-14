import { render } from '@testing-library/react'

import { Card } from './card'

describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card />)
    expect(baseElement).toBeTruthy()
  })

  it('should render children', () => {
    const { getByText } = render(<Card>Test</Card>)
    expect(getByText('Test')).toBeTruthy()
  })

  it('should apply additional class names', () => {
    const { getByText, debug } = render(
      <Card className="additional-class">Test</Card>,
    )
    debug()
    expect(JSON.stringify(getByText('Test'))).toContain('additional-class')
  })
})
