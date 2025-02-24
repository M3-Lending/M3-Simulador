import React from "react";
import { cn } from "../../../utils/cn";

type Props = React.PropsWithChildren & React.ComponentProps<"div"> & {
  variant?: 'lg' | 'pdf'
}

export const Wrapper = ({ variant = 'lg', children, ...props }: Props) => {

  const variants = {
    lg: 'max-w-[1420px] px-[77px]',
    pdf: 'max-w-[1050px] px-[30px]'

  }

  return (
    <div
      {...props}
      className={cn(
        "w-full max-w-[1420px] mx-auto  py-[55px]",
        variants[variant],
        props.className
      )}
    >
      {children}
    </div>
  );
};
