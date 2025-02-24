import React from "react";
import { useNavigate } from "react-router";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";


import { PATHS } from "../../../routers";
import { PersonaltDelete } from "../utils";
import { storage } from "../../../shared/utils/storage";
import { calculatePriceInvestment } from "../utils/price";
import { calculateSimpleInvestment } from "../utils/simple";
import { getFormatterForCurrency } from "../../../shared/utils/formatters";
import { SimulationScheema, SimulationScheemaType } from "./simulation-scheema";

export const useSimulationModel = () => {
  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<SimulationScheemaType>({
    resolver: zodResolver(SimulationScheema),
    defaultValues: {
      interestRate: "",
      timeToInvest: "",
      typeOfInvest: "",
      valueToInvest: "",
    },
  });

  const navigate = useNavigate();
  const format = getFormatterForCurrency();

  const simulateInvestment: SubmitHandler<SimulationScheemaType> = async (
    data
  ) => {

    const time = parseFloat(data.timeToInvest);
    const value = parseFloat(data.valueToInvest);
    const interestRate = parseFloat(data.interestRate);

    if (data.typeOfInvest === 'price') {

      const result = calculatePriceInvestment({
        time,
        value,
        interestRate,
      })

      storage.set('detailedResultsPrice', JSON.stringify(result))

    }

    if (data.typeOfInvest === 'simple') {
      const resultOfAllTime = calculateSimpleInvestment({
        interestRate, time, value
      })

      storage.set("detailedResults", JSON.stringify(resultOfAllTime));

    }

    storage.set('investType', data.typeOfInvest)

    navigate(PATHS.RESULT);
  };

  const displayErroVariant = (condition: boolean) => {
    if (condition) {
      return "fail";
    }

    return "default";
  };

  const handleInputWithPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof SimulationScheemaType
  ) => {
    const firstTreatment = event.target.value.replace("R$", "").trim();

    const cleanedValue = firstTreatment.replace(/\D/g, "");

    if (cleanedValue) {
      const numberValue = parseFloat(cleanedValue) / 100;
      const formattedValue = format.format(numberValue);

      setValue(field, formattedValue, { shouldValidate: true });
    } else {
      setValue(field, "", { shouldValidate: true });
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof SimulationScheemaType
  ) => {
    const cleanedValue = event.target.value.replace(/[^\d.]/g, "");

    setValue(field, cleanedValue, { shouldValidate: true });
  };

  const handlePorcentagemInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof SimulationScheemaType
  ) => {
    let inputValue = e.target.value.replace("%", "");

    if ((e.nativeEvent as InputEvent).data === null) {
      return setValue(
        field,
        PersonaltDelete({
          e,
          inputValue,
        }) as string
      );
    }

    inputValue = inputValue.replace(/[^0-9.]/g, "");

    if (inputValue.includes(".")) {
      const [integer, decimal] = inputValue.split(".");
      inputValue = integer + "." + decimal.slice(0, 2);
    }

    setValue(field, inputValue + "%", { shouldValidate: true });
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
    handlePorcentagemInput,
    handleInputWithPriceChange,
  };
};
