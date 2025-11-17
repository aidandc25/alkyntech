import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva(
  'rounded-xl transition-all duration-300',
  {
    variants: {
      variant: {
        default:
          'bg-card text-card-foreground border border-border shadow-sm',
        elevated:
          'bg-card text-card-foreground border border-border shadow-lg hover:shadow-xl',
        glass:
          'bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg border border-white/20',
        interactive:
          'bg-card text-card-foreground border border-border shadow-sm hover:shadow-lg hover:scale-[1.02] cursor-pointer',
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ variant, padding, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Card.displayName = 'Card'

export { Card, cardVariants }
