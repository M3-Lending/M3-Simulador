import * as T from "../../../../shared/components/_core/table";
import { RenderList } from "../../../../shared/components/render-utils/render-list";

const tableHeaders = [
  "Prazo",
  "Rendimento líquido",
  "Rendimento bruto",
  "Imposto de renda",
];

const detailed_result = [
  {
    time: "1",
    net_income: "1.200",
    gross_income: "1.450",
    income_tax: "250",
  },
  {
    time: "2",
    net_income: "1.200",
    gross_income: "1.450",
    income_tax: "250",
  },
  {
    time: "3",
    net_income: "1.200",
    gross_income: "1.450",
    income_tax: "250",
  },
  {
    time: "4",
    net_income: "1.200",
    gross_income: "1.450",
    income_tax: "250",
  },
];

export const TableResult = () => {
  return (
    <T.Table>
      <T.TableHeader className="border-m3-gray-50 border">
        <T.TableRow className="border-m3-gray-50 border">
          <RenderList
            items={tableHeaders}
            renderItem={(item) => (
              <T.TableHead className="border-m3-gray-50 border font-bold">
                {item}
              </T.TableHead>
            )}
          />
        </T.TableRow>
      </T.TableHeader>
      <T.TableBody className="border-m3-gray-50 border">
        <RenderList
          items={detailed_result}
          renderItem={(result) => (
            <T.TableRow className="border-m3-gray-50 border text-center">
              <T.TableCell className="border-m3-gray-50 border">
                {result.time} mês
              </T.TableCell>
              <T.TableCell className="border-m3-gray-50 border font-bold">
                R$ {result.net_income}
              </T.TableCell>
              <T.TableCell className="border-m3-gray-50 border">
                R$ {result.gross_income}
              </T.TableCell>
              <T.TableCell className="border-m3-gray-50 border">
                R$ {result.income_tax}
              </T.TableCell>
            </T.TableRow>
          )}
        />
      </T.TableBody>
    </T.Table>
  );
};
