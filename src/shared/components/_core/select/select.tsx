import * as S from "@radix-ui/react-select";

import { RenderList } from "../../render-utils/render-list";
import { Icons } from "../../../icons";
import { variants, VariantsOptions } from "../../../utils/form";
import { cn } from "../../../utils/cn";

type Props = {
  options: {
    label: string;
    value: string;
  }[];
  variant?: VariantsOptions;
} & React.ComponentPropsWithoutRef<typeof S.Root>;

export const Select = ({ options, variant = "default", ...props }: Props) => {
  const { ArrowDown } = Icons;

  return (
    <S.Root {...props}>
      <S.Trigger
        aria-label="Tipo de investimento"
        className={cn(
          "data-[placeholder]:text-m3-gray-100 justify-between cursor-pointer group flex items-center px-[14px] py-4 w-[386px] text-start shadow-md focus:outline-none hover:outline-none  rounded-[8px]  transition-all duration-300",
          variants[variant]
        )}
      >
        <S.Value placeholder="Selecione a opção desejada" />

        <ArrowDown className="size-5 rotate-180 group-data-[state=open]:rotate-0 transition-all duration-200" />
      </S.Trigger>
      <S.Portal>
        <S.Content position="popper" sideOffset={5} className="SelectContent">
          <S.Group>
            <RenderList
              items={options}
              renderItem={(opt) => (
                <S.Item
                  value={opt.value}
                  className="text-m3-gray-100 border-m3-gray-100/20 border-t px-[14px] py-4 w-[386px] cursor-pointer hover:bg-m3-gray-100/20 hover:text-black focus:outline-none hover:outline-none  rounded-[8px]  transition-all duration-300"
                >
                  <S.ItemText>{opt.label}</S.ItemText>
                </S.Item>
              )}
            />
          </S.Group>
        </S.Content>
      </S.Portal>
    </S.Root>
  );
};
