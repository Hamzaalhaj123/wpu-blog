//! very dangerous code

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import LoadingSpinner from "@/components/shared/LoadingSpinner";
import cn from "@/utils/cn";

const buttonVariants = cva(
  "relative inline-flex group disabled:cursor-not-allowed cursor-pointer items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 data-[isLoading=true]:invisible",
  {
    variants: {
      variant: {
        primary:
          "bg-primary hover:bg-opacity-80 active:bg-opacity-90  border-primary data-[outline=true]:text-primary data-[icon=true]:text-primary data-[smooth=true]:text-primary",
        secondary:
          "bg-secondary hover:bg-opacity-80 active:bg-opacity-90 border-secondary data-[outline=true]:text-secondary data-[icon=true]:text-secondary data-[smooth=true]:text-secondary",
        error:
          "bg-error hover:bg-opacity-80 active:bg-error-darker border-error data-[outline=true]:text-error data-[icon=true]:text-error data-[smooth=true]:text-error",
        success:
          "bg-success hover:bg-opacity-80 active:bg-success-darker border-success data-[outline=true]:text-success data-[icon=true]:text-success data-[smooth=true]:text-success",
        warning:
          "bg-warning hover:bg-opacity-80 active:bg-warning-darker border-warning data-[outline=true]:text-warning data-[icon=true]:text-warning data-[smooth=true]:text-warning",
      },
      size: {
        small: "px-3 py-1.5 text-xs",
        medium: "px-4 py-2 text-sm",
        large: "px-5 py-2.5 text-base",
      },
      icon: {
        true: "rounded-full px-2 py-2 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-40",
        false: "rounded-md",
      },
      outline: {
        true: "border bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-40",
        false: "",
      },
      smooth: {
        true: "bg-opacity-30 hover:bg-opacity-40 active:bg-opacity-50 hover:text-foreground",
        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "medium",
      icon: false,
      smooth: false,
      outline: false,
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonProps = {
  asChild?: boolean;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      asChild = false,
      isLoading = false,
      children,
      variant,
      size,
      icon,
      smooth,
      outline,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        data-outline={outline}
        data-icon={icon}
        data-smooth={smooth}
        data-isLoading={isLoading}
        className={cn(
          buttonVariants({ className, variant, size, icon, outline, smooth }),
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {asChild && React.isValidElement(children) ? (
          React.cloneElement(
            children,
            {},
            <>
              {children.props.children}
              <LoadingSpinner isLoading={isLoading} />
            </>,
          )
        ) : (
          <>
            {children}
            <LoadingSpinner isLoading={isLoading} />
          </>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export default Button;

export { buttonVariants };
