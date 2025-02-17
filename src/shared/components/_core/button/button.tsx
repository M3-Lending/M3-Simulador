import React from "react";
import { cn } from "../../../utils/cn";
import { Slot } from "@radix-ui/react-slot";

type VariantButtonOptions = "primary" | "outline";

type SizesButtonOptions = "default" | "full";

type Props = React.PropsWithChildren & {
  asChild?: boolean;
  size?: SizesButtonOptions;
  variant?: VariantButtonOptions;
} & React.ComponentProps<"button">;

export const Button = ({
  asChild,
  size = "default",
  variant = "primary",
  ...props
}: Props) => {
  const variants: Record<VariantButtonOptions, string> = {
    primary: "bg-m3-primary",
    outline: "bg-transparent border border-m3-primary",
  };

  const sizes: Record<SizesButtonOptions, string> = {
    default: "w-[383px]",
    full: "w-full",
  };

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...props}
      className={cn(
        "w-full py-[14px] px-4 rounded-[8px] cursor-pointer hover:scale-[1.03] duration-300 transition-transform active:scale-110",
        sizes[size],
        variants[variant],
        props.className
      )}
    />
  );
};
