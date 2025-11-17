import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const tagVariants = cva(
  'inline-flex items-center gap-1.5 whitespace-nowrap rounded-full font-medium transition-all duration-200',
  {
    variants: {
      variant: {
        default:
          'bg-zinc-900/30 dark:bg-white/20 backdrop-blur-md text-foreground border border-border/60',
        primary:
          'bg-primary/10 text-primary border border-primary/20',
        secondary:
          'bg-secondary/10 text-secondary border border-secondary/20',
        outline:
          'bg-transparent border-2 border-border text-foreground',
        glass:
          'bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg border border-white/20 text-foreground',
      },
      size: {
        sm: 'px-2.5 py-1 text-xs',
        md: 'px-3 py-1.5 text-sm',
        lg: 'px-4 py-2 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        className={cn(tagVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Tag.displayName = 'Tag'

export { Tag, tagVariants }
