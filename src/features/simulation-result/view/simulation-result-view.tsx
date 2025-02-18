import { Link } from "react-router";
import { Button } from "../../../shared/components/_core/button";
import { RenderList } from "../../../shared/components/render-utils/render-list";
import { WithHeaderLayout } from "../../../shared/layouts/with-header-layout";

import { ResultBlock } from "../component/result-block";
import { TableResult } from "../component/table-result";
import { SimulationResultProps } from "../types";
import { DetailedResult, Informations } from "../../../shared/types";

type SimulationResultViewProps = {
  informations: Informations | null;
  resultsByMounth: DetailedResult[] | null;
  simulationResult: SimulationResultProps[];
};

export const SimulationResultView = ({
  informations,
  resultsByMounth,
  simulationResult,
}: SimulationResultViewProps) => {
  return (
    <WithHeaderLayout>
      <h1 className="text-m3-secondary text-[49px] leading-[58.8px] my-[116px] text-center">
        Seu dinheiro investido em {informations?.time} meses, a uma taxa de
        juros de {informations?.interestRate}%, teve o incrível rendimento
        abaixo:
      </h1>
      <div className="flex w-full gap-[30px]">
        <section className="flex flex-col gap-[116px] items-start justify-between w-full relative z-10">
          <div className="grid grid-cols-2 grid-rows-2 gap-[30px]">
            <RenderList
              items={simulationResult}
              renderItem={(opt) => (
                <ResultBlock
                  label={opt?.label || 0}
                  className="min-w-[290px]"
                  description={opt.description}
                />
              )}
            />
          </div>

          <Button variant="outline" asChild>
            <Link to="/" className="text-center">
              Realizar outra simulação
            </Link>
          </Button>
        </section>
        {/* ----- */}
        <div className="bg-m3-gray-200 h-full w-px" />
        {/* ----- */}
        <section className="flex flex-col gap-[116px] items-end justify-between w-full relative z-10">
          <div className="w-full  h-[350px] overflow-auto">
            <TableResult detailedResult={resultsByMounth || []} />
          </div>

          <Button className="self-end">Gerar relátorio PDF</Button>
        </section>
      </div>
    </WithHeaderLayout>
  );
};
