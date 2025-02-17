import { Link } from "react-router";
import { Button } from "../../../shared/components/_core/button";
import { Input } from "../../../shared/components/_core/input";
import { Select } from "../../../shared/components/_core/select";
import { WithHeaderLayout } from "../../../shared/layouts/with-header-layout";
import { PATHS } from "../../../routers";

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

export const SimulationView = () => {
  return (
    <WithHeaderLayout>
      <h1 className="text-m3-secondary text-[49px] leading-[58.8px] my-[116px] text-center">
        Desbloqueie o potencial dos seus investimentos
      </h1>
      <form className="flex flex-col gap-[116px] items-center justify-center w-full relative z-10">
        <div className="grid grid-cols-2 grid-rows-2 gap-[100px]">
          <Input label="Quanto pretende investir?" placeholder="1.000,00" />
          <Input label="Qual a taxa de juros? (em meses)" placeholder="2.3%" />
          <Input label="Qual o prazo? (em meses)" placeholder="12" />
          <div className="flex flex-col gap-[14px] items-start">
            <label className="text-m3-gray-200 font-semibold">
              Tipo de investimento?
            </label>
            <Select options={investiment_options} />
          </div>
        </div>

        <Button asChild>
          <Link to={PATHS.RESULT} className="text-center">
            Simular Agora
          </Link>
        </Button>
      </form>
    </WithHeaderLayout>
  );
};
