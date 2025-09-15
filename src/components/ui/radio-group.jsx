"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

const RadioGroup = React.forwardRef(({ className = "", ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={`grid gap-2 ${className}`}
    {...props}
  />
))
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef(({ className = "", ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={`aspect-square h-4 w-4 rounded-full border border-slate-300 text-primary
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <div className="h-2 w-2 rounded-full bg-current" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
))
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
