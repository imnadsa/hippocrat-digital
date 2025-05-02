import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-fixedsys",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white shadow-md hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-teal-700 bg-transparent text-teal-400 hover:bg-teal-950/50 hover:border-teal-500",
        secondary: "bg-gradient-to-r from-indigo-500 to-indigo-700 text-white hover:from-indigo-600 hover:to-indigo-800 shadow-md hover:shadow-lg",
        ghost: "bg-transparent hover:bg-slate-800/50 text-slate-300 hover:text-teal-400",
        link: "text-teal-400 underline-offset-4 hover:underline",
        // Добавляем вариант для кнопки на сером фоне (как в HippocratAI)
        dark: "bg-slate-800/50 hover:bg-slate-700/70 text-slate-200 border border-slate-700 hover:border-teal-700",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-full px-4 py-1.5 text-xs",
        lg: "h-12 rounded-full px-8 py-3 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
Button.displayName = "Button"

export { Button, buttonVariants }
