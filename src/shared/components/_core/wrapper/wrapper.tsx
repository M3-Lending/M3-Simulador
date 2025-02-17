import React from "react";
import { cn } from "../../../utils/cn";

type Props = React.PropsWithChildren & React.ComponentProps<"div">;

export const Wrapper = ({ children, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn(
        "w-full max-w-[1420px] mx-auto px-[77px] py-[55px]",
        props.className
      )}
    >
      {children}
    </div>
  );
};
