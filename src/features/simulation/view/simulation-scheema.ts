import { z } from "zod";

export const SimulationScheema = z.object({
  valueToInvest: z
    .string()
    .transform((val) => {
      const cleanedValue = val.replace(/[^\d.,]/g, "");
      const hasPoint = cleanedValue.includes(".");

      if (!hasPoint) {
        //this handle with values less than 1000, values like 999,00 or 377,77
        return cleanedValue.replace(",", ".");
      }

      return cleanedValue.replace(".", "").replace(",", ".");
    })
    .refine((val) => val !== "" && Number(val) >= 250, {
      message: "O valor mínimo para investimento é R$ 250,00.",
    }),
  timeToInvest: z
    .string()
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => val !== "" && Number(val) > 0, {
      message: "Digite um prazo válido.",
    }),
  interestRate: z
    .string()
    .transform((val) => val.replace(/[^\d.]/g, ""))
    .refine((val) => val !== "" && Number(val) > 0, {
      message: "Digite uma taxa de juros válida.",
    }),
  typeOfInvest: z.string().min(5, "Selecione uma opção válida."),
});

export type SimulationScheemaType = z.infer<typeof SimulationScheema>;
