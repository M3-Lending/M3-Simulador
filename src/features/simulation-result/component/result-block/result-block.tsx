import React from "react";
import { cn } from "../../../../shared/utils/cn";

type Props = {
  label: string | number;
  description: string;
} & React.ComponentProps<"div">;

export const ResultBlock = ({ label, description, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn(
        "border border-m3-gray-200 rounded-[8px] py-[14px] px-[13px]",
        props.className
      )}
    >
      <label className="text-m3-gray-200 font-medium text-[32px]">
        <span className="text-4xl">R$</span> {label}
      </label>
      <dd className="text-m3-gray-100 text-[20px]">{description}</dd>
    </div>
  );
};
