import React from "react";
import { variants, VariantsOptions } from "../../../utils/form";
import { cn } from "../../../utils/cn";

type Props = React.ComponentProps<"input"> & {
  label?: string;
  errorMessage?: string;
  variant?: VariantsOptions;
};

export const Input = ({
  label,
  errorMessage,
  variant = "default",
  ...props
}: Props) => {
  return (
    <div className="flex flex-col gap-[14px] items-start relative">
      {errorMessage && (
        <span
          className="text-red-500 text-sm absolute -top-5"
          aria-label="Erro no formulario"
        >
          {errorMessage}
        </span>
      )}
      {label && (
        <label className="text-m3-gray-200 font-semibold">{label} </label>
      )}
      <input
        {...props}
        className={cn(
          "placeholder:text-m3-gray-100 focus:outline-m3-gray-100 focus:outline px-[14px] py-4 w-[386px] shadow-md hover:outline-none rounded-[8px] transition-all duration-300",
          variants[variant],
          props.className
        )}
      />
    </div>
  );
};
