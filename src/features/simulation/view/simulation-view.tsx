import { useNavigate } from "react-router";
import { Button } from "../../../shared/components/_core/button";
import { Input } from "../../../shared/components/_core/input";
import { Select } from "../../../shared/components/_core/select";
import { WithHeaderLayout } from "../../../shared/layouts/with-header-layout";
//import { PATHS } from "../../../routers";

import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { SimulationScheema, SimulationScheemaType } from "./simulation-scheema";
import { zodResolver } from "@hookform/resolvers/zod";
import { calcIncomeTaxValue } from "../utils";
import {
  DetailedResult,
  SimulationTotalValues,
  storage,
} from "../../../shared/utils/storage";
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
  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<SimulationScheemaType>({
    resolver: zodResolver(SimulationScheema),
  });

  const navigate = useNavigate();

  const simulateInvestment: SubmitHandler<SimulationScheemaType> = async (
    data
  ) => {
    const grossIncome =
      parseFloat(data.valueToInvest) * (parseFloat(data.interestRate) / 100);

    const time = Number(data.timeToInvest);

    const resultOfAllTime = [];

    for (let i = 0; i < time; i++) {
      const incomeTax = grossIncome * (calcIncomeTaxValue(i + 1) / 100);

      const resultByMonth: DetailedResult = {
        time: String(i + 1),
        netIncome: String(grossIncome - incomeTax),
        grossIncome: grossIncome.toFixed(2),
        incomeTax: incomeTax.toFixed(2),
      };

      resultOfAllTime.push(resultByMonth);
    }

    storage.set("detailedResults", JSON.stringify(resultOfAllTime));

    const totalGrossIncome = resultOfAllTime.reduce(
      (accumulator, actual) => accumulator + parseFloat(actual.grossIncome),
      0
    );

    const totalIncomeTax = resultOfAllTime.reduce(
      (accumulator, actual) => accumulator + parseFloat(actual.incomeTax),
      0
    );

    const totalNetIncome = resultOfAllTime.reduce(
      (accumulator, actual) => accumulator + parseFloat(actual.netIncome),
      0
    );

    const simulationResult: SimulationTotalValues = {
      totalNetIncome,
      totalIncomeTax,
      totalGrossIncome,
      amountInvested: parseFloat(data.valueToInvest),
    };

    storage.set("simulationResult", JSON.stringify(simulationResult));
    storage.set(
      "informations",
      JSON.stringify({
        time: data.timeToInvest,
        interestRate: data.interestRate,
      })
    );

    navigate(PATHS.RESULT);
  };

  const displayErroVariant = (condition: boolean) => {
    if (condition) {
      return "fail";
    }

    return "default";
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof SimulationScheemaType
  ) => {
    const cleanedValue = event.target.value.replace(/[^\d.]/g, "");

    setValue(field, cleanedValue, { shouldValidate: true });
  };

  return (
    <WithHeaderLayout>
      <h1 className="text-m3-secondary text-[49px] leading-[58.8px] my-[116px] text-center">
        Desbloqueie o potencial dos seus investimentos
      </h1>
      <form
        onSubmit={handleSubmit(simulateInvestment)}
        className="flex flex-col gap-[116px] items-center justify-center w-full relative z-10"
      >
        <div className="grid grid-cols-2 grid-rows-2 gap-[100px]">
          <Input
            placeholder="1.000,00"
            {...register("valueToInvest")}
            label="Quanto pretende investir?"
            errorMessage={errors.valueToInvest?.message}
            onChange={(e) => handleInputChange(e, "valueToInvest")}
            variant={displayErroVariant(!!errors.valueToInvest?.message)}
          />
          <Input
            placeholder="2.3%"
            {...register("interestRate")}
            label="Qual a taxa de juros? (em meses)"
            errorMessage={errors.interestRate?.message}
            onChange={(e) => handleInputChange(e, "interestRate")}
            variant={displayErroVariant(!!errors.interestRate?.message)}
          />
          <Input
            placeholder="12"
            {...register("timeToInvest")}
            label="Qual o prazo? (em meses)"
            errorMessage={errors.timeToInvest?.message}
            onChange={(e) => handleInputChange(e, "timeToInvest")}
            variant={displayErroVariant(!!errors.timeToInvest?.message)}
          />
          <div className="flex flex-col gap-[14px] items-start">
            <label className="text-m3-gray-200 font-semibold">
              Tipo de investimento?
            </label>
            <Controller
              control={control}
              name="typeOfInvest"
              render={({ field: { onChange, value } }) => (
                <Select
                  value={value}
                  onValueChange={onChange}
                  options={investiment_options}
                  variant={displayErroVariant(!!errors.typeOfInvest?.message)}
                />
              )}
            />
          </div>
        </div>

        <Button type="submit">
          {/* <Link to={PATHS.RESULT} className="text-center"> */}
          Simular Agora
          {/* </Link> */}
        </Button>
      </form>
    </WithHeaderLayout>
  );
};
