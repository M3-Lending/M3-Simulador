import React from "react";
import { cn } from "../../../utils/cn";

type Props = React.PropsWithChildren & React.ComponentProps<"div"> & {
  variant?: 'lg' | 'pdf'
}

export const Wrapper = ({ variant = 'lg', children, ...props }: Props) => {

  const variants = {
    lg: 'max-w-[1420px]',
    pdf: 'max-w-[820px]'

  }

  return (
    <div
      {...props}
      className={cn(
        "w-full max-w-[1420px] mx-auto px-[77px] py-[55px]",
        variants[variant],
        props.className
      )}
    >
      {children}
    </div>
  );
};
