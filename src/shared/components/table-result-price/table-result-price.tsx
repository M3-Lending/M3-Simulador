
import { DetailedResultPrice } from '../../types';
import { getFormatterForCurrency } from '../../utils/formatters';
import * as T from '../_core/table'
import { RenderList } from '../render-utils/render-list';



const tableHeaders = [
  "Prazo",
  "Rendimento líquido",
  "Rendimento bruto",
  "Saldo investimento",
  "Juros",
  "Imposto de renda",
  "Amortização",
  "Rendimento"
];

export const TableResultPrice = ({
  detailedResultPrice,
}: {
  detailedResultPrice: DetailedResultPrice[];
}) => {
  const format = getFormatterForCurrency();

  return (
    <T.Table>
      <T.TableHeader className="border-m3-gray-50 border">
        <T.TableRow className="border-m3-gray-50 border">
          <RenderList
            items={tableHeaders}
            renderItem={(item) => (
              <T.TableHead className="border-m3-gray-50 border font-bold text-center">
                {item}
              </T.TableHead>
            )}
          />
        </T.TableRow>
      </T.TableHeader>
      <T.TableBody className="border-m3-gray-50 border">
        <RenderList
          items={detailedResultPrice}
          renderItem={(result) => (
            <T.TableRow className="border-m3-gray-50 border text-center">
              <T.TableCell className="border-m3-gray-50 border">
                {result.time} mês
              </T.TableCell>
              <T.TableCell className="border-m3-gray-50 border font-bold">
                {format.format(result.netIncome)}
              </T.TableCell>
              <T.TableCell className="border-m3-gray-50 border">
                {format.format(result.installmentValue)}
              </T.TableCell>

              <T.TableCell className="border-m3-gray-50 border">
                {format.format(result.valueBeforeAmortization)}
              </T.TableCell>

              <T.TableCell className="border-m3-gray-50 border">
                {format.format(result.interestToPay)}
              </T.TableCell>
              <T.TableCell className="border-m3-gray-50 border">
                {format.format(result.incomeTax)}
              </T.TableCell>
              <T.TableCell className="border-m3-gray-50 border">
                {format.format(result.amortization)}
              </T.TableCell>
              <T.TableCell className="border-m3-gray-50 border">
                {format.format(result.valueBeforeAmortization + result.interestToPay)}
              </T.TableCell>

            </T.TableRow>
          )}
        />
      </T.TableBody>
    </T.Table>
  );
};
