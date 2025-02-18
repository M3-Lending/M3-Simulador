import { Button } from "../../../shared/components/_core/button";
import { Input } from "../../../shared/components/_core/input";
import { Select } from "../../../shared/components/_core/select";
import { WithHeaderLayout } from "../../../shared/layouts/with-header-layout";

import { Controller } from "react-hook-form";
import { SimulationViewProps } from "../types";

const investiment_options = [
  {
    label: "Simples",
    value: "simple",
  },
  {
    label: "Price",
    value: "price",
  },
];

export const SimulationView = ({
  form,
  displayErroVariant,
  handleInputChange,
  simulateInvestment,
  handlePorcentagemInput,
  handleInputWithPriceChange,
}: SimulationViewProps) => {
  return (
    <WithHeaderLayout>
      <h1 className="text-m3-secondary text-[49px] leading-[58.8px] my-[116px] text-center">
        Desbloqueie o potencial dos seus investimentos
      </h1>
      <form
        onSubmit={form.handleSubmit(simulateInvestment)}
        className="flex flex-col gap-[116px] items-center justify-center w-full relative z-10"
      >
        <div className="grid grid-cols-2 grid-rows-2 gap-[100px]">
          <Input
            placeholder="1.000,00"
            {...form.register("valueToInvest")}
            label="Quanto pretende investir?"
            errorMessage={form.errors.valueToInvest?.message}
            onChange={(e) => handleInputWithPriceChange(e, "valueToInvest")}
            variant={displayErroVariant(!!form.errors.valueToInvest?.message)}
          />
          <Input
            placeholder="2.3%"
            {...form.register("interestRate")}
            label="Qual a taxa de juros? (em meses)"
            errorMessage={form.errors.interestRate?.message}
            onChange={(e) => handlePorcentagemInput(e, "interestRate")}
            variant={displayErroVariant(!!form?.errors.interestRate?.message)}
          />
          <Input
            placeholder="12"
            {...form.register("timeToInvest")}
            label="Qual o prazo? (em meses)"
            errorMessage={form.errors.timeToInvest?.message}
            onChange={(e) => handleInputChange(e, "timeToInvest")}
            variant={displayErroVariant(!!form.errors.timeToInvest?.message)}
          />
          <div className="flex flex-col gap-[14px] items-start">
            <label className="text-m3-gray-200 font-semibold">
              Tipo de investimento?
            </label>
            <Controller
              control={form.control}
              name="typeOfInvest"
              render={({ field: { onChange, value } }) => (
                <Select
                  value={value}
                  onValueChange={onChange}
                  options={investiment_options}
                  variant={displayErroVariant(
                    !!form.errors.typeOfInvest?.message
                  )}
                />
              )}
            />
          </div>
        </div>

        <Button type="submit">Simular Agora</Button>
      </form>
    </WithHeaderLayout>
  );
};
