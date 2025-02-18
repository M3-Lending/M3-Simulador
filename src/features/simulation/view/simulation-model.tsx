import React from "react";
import {
  DetailedResult,
  SimulationTotalValues,
  storage,
} from "../../../shared/utils/storage";
import { SimulationScheema, SimulationScheemaType } from "./simulation-scheema";
import { PATHS } from "../../../routers";
import { calcIncomeTaxValue } from "../utils";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";

export const useSimulationModel = () => {
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
  return {
    form: {
      errors,
      control,
      register,
      handleSubmit,
    },

    handleInputChange,
    simulateInvestment,
    displayErroVariant,
  };
};
