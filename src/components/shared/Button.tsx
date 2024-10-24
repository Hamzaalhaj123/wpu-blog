//! very dangerous code

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import LoadingSpinner from "@/components/shared/LoadingSpinner";
import cn from "@/utils/cn";

export const variants = {
  variant: {
    plain: "bg-opacity-0 text-foreground  ",
    primary:
      "bg-primary hover:bg-opacity-80 active:bg-opacity-90 border-primary data-[outline=true]:text-primary-foreground data-[icon=true]:text-primary-foreground data-[smooth=true]:text-primary-foreground data-[link=true]:text-primary-foreground",
    secondary:
      "bg-secondary hover:bg-opacity-80 active:bg-opacity-90 border-secondary data-[outline=true]:text-secondary-foreground data-[icon=true]:text-secondary-foreground data-[smooth=true]:text-secondary-foreground data-[link=true]:text-secondary-foreground",
    error:
      "bg-destructive hover:bg-opacity-80 active:bg-opacity-90 border-destructive data-[outline=true]:text-destructive-foreground data-[icon=true]:text-destructive-foreground data-[smooth=true]:text-destructive-foreground data-[link=true]:text-destructive-foreground",
    success:
      "bg-success hover:bg-opacity-80 active:bg-opacity-90 border-success data-[outline=true]:text-success-foreground data-[icon=true]:text-success-foreground data-[smooth=true]:text-success-foreground data-[link=true]:text-success-foreground",
    warning:
      "bg-warning hover:bg-opacity-80 active:bg-opacity-90 border-warning data-[outline=true]:text-warning-foreground data-[icon=true]:text-warning-foreground data-[smooth=true]:text-warning-foreground data-[link=true]:text-warning-foreground",
  },
  size: {
    none: "px-0 py-0 text-base",
    small: "px-3 py-1.5 text-xs",
    medium: "px-4 py-2 text-sm",
    large: "px-5 py-2.5 text-base",
  },
  icon: {
    true: "rounded-full px-2 py-2 bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-40",
  },
  outline: {
    true: "border bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-40",
  },
  smooth: {
    true: "bg-opacity-30 hover:bg-opacity-40 active:bg-opacity-50 hover:text-foreground",
  },
  link: {
    true: "underline underline-offset-4 bg-opacity-0 hover:bg-opacity-0 active:bg-opacity-0",
  },
  pill: {
    true: "rounded-full",
  },
};

const buttonVariants = cva(
  "relative inline-flex group disabled:cursor-not-allowed cursor-pointer items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 data-[isloading=true]:invisible",
  {
    variants,
    defaultVariants: {
      variant: "primary",
      size: "medium",
      link: false,
      icon: false,
      smooth: false,
      outline: false,
      pill: false,
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
      link,
      pill,
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
        data-isloading={isLoading}
        data-link={link}
        className={cn(
          buttonVariants({
            className,
            variant,
            size,
            icon,
            outline,
            smooth,
            pill,
            link,
          }),
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
