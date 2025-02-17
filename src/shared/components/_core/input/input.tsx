import React from "react";
import { variants, VariantsOptions } from "../../../utils/form";
import { cn } from "../../../utils/cn";

type Props = React.ComponentProps<"input"> & {
  label?: string;
  variant?: VariantsOptions;
};

export const Input = ({ label, variant = "default", ...props }: Props) => {
  return (
    <div className="flex flex-col gap-[14px] items-start">
      {label && (
        <label className="text-m3-gray-200 font-semibold">
          Quanto pretende investir?
        </label>
      )}
      <input
        {...props}
        className={cn(
          "text-m3-gray-100 px-[14px] py-4 w-[386px] shadow-md focus:outline-none hover:outline-none  rounded-[8px]  transition-all duration-300",
          variants[variant],
          props.className
        )}
      />
    </div>
  );
};
