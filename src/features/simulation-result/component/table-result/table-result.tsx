import * as T from "../../../../shared/components/_core/table";
import { RenderList } from "../../../../shared/components/render-utils/render-list";
import { getFormatterForCurrency } from "../../../../shared/utils/formatters";
import { DetailedResult } from "../../../../shared/utils/storage";

const tableHeaders = [
  "Prazo",
  "Rendimento líquido",
  "Rendimento bruto",
  "Imposto de renda",
];

export const TableResult = ({
  detailedResult,
}: {
  detailedResult: DetailedResult[];
}) => {
  const format = getFormatterForCurrency();

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
          items={detailedResult}
          renderItem={(result) => (
            <T.TableRow className="border-m3-gray-50 border text-center">
              <T.TableCell className="border-m3-gray-50 border">
                {result.time} mês
              </T.TableCell>
              <T.TableCell className="border-m3-gray-50 border font-bold">
                {format.format(parseFloat(result.netIncome))}
              </T.TableCell>
              <T.TableCell className="border-m3-gray-50 border">
                {format.format(parseFloat(result.grossIncome))}
              </T.TableCell>
              <T.TableCell className="border-m3-gray-50 border">
                {format.format(parseFloat(result.incomeTax))}
              </T.TableCell>
            </T.TableRow>
          )}
        />
      </T.TableBody>
    </T.Table>
  );
};
