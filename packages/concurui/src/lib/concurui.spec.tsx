import { render } from '@testing-library/react'

import Concurui from './concurui'

describe('Concurui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Concurui />)
    expect(baseElement).toBeTruthy()
  })
})
