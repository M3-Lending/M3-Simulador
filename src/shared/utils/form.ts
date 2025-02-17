export const variants = {
  default: "",
  fail: "border-b border-b-red-500 focus:border-b-[2px]",
  success: "border-b border-b-green-500 focus:border-b-[2px]",
} as const;

export type VariantsOptions = keyof typeof variants;
