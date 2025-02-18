import {
  Control,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { SimulationScheemaType } from "../view/simulation-scheema";

export type SimulationViewProps = {
  form: {
    handleSubmit: UseFormHandleSubmit<
      {
        valueToInvest: string;
        timeToInvest: string;
        interestRate: string;
        typeOfInvest: string;
      },
      undefined
    >;
    register: UseFormRegister<{
      valueToInvest: string;
      timeToInvest: string;
      interestRate: string;
      typeOfInvest: string;
    }>;
    errors: FieldErrors<{
      valueToInvest: string;
      timeToInvest: string;
      interestRate: string;
      typeOfInvest: string;
    }>;
    control: Control<
      {
        valueToInvest: string;
        timeToInvest: string;
        interestRate: string;
        typeOfInvest: string;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    >;
  };
  displayErroVariant: (props: boolean) => "fail" | "default";
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof SimulationScheemaType
  ) => void;
  handlePorcentagemInput: (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof SimulationScheemaType
  ) => void;
  handleInputWithPriceChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof SimulationScheemaType
  ) => void;
  simulateInvestment: SubmitHandler<{
    valueToInvest: string;
    timeToInvest: string;
    interestRate: string;
    typeOfInvest: string;
  }>;
};
