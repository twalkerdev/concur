'use client'

import * as React from 'react'

import { cn } from '../../lib/utils'

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ htmlFor, ...props }, ref) => (
    <label
      htmlFor={htmlFor}
      ref={ref}
      className={cn('flex text-sm text-left font-medium pb-2')}
      {...props}
    />
  ),
)
Label.displayName = 'Label'

export { Label }
