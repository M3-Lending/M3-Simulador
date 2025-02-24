
import React from "react";

import { Link } from "react-router";
import { SimulationResultProps } from "../types";
import { Button } from "../../../shared/components/_core/button";
import { DetailedResult, DetailedResultPrice, Informations, InvestimentType } from "../../../shared/types";
import { WithHeaderLayout } from "../../../shared/layouts/with-header-layout";
import { RenderList } from "../../../shared/components/render-utils/render-list";

import { ResultBlock } from "../component/result-block";
import { TableResult } from "../../../shared/components/table-result/";

import { UseReactToPrintFn } from "react-to-print";
import { TableResultPrice } from "../../../shared/components/table-result-price";
import { cn } from "../../../shared/utils/cn";

const PdfView = React.lazy(() => import('../../pdf/view/pdf-view').then(module => ({ default: module.PdfView })))

type SimulationResultViewProps = {
  downloadPDF: UseReactToPrintFn;
  informations: Informations | null;
  investmentType: InvestimentType | null
  resultsByMounth: DetailedResult[] | null;
  simulationResult: SimulationResultProps[];
  resultsByMounthPrice: DetailedResultPrice[] | null;
  contentRef: React.RefObject<HTMLDivElement | null>;
};

export const SimulationResultView = ({
  contentRef,
  downloadPDF,
  informations,
  investmentType,
  resultsByMounth,
  simulationResult,
  resultsByMounthPrice
}: SimulationResultViewProps) => {
  return (
    <WithHeaderLayout>
      <h1 className="text-m3-secondary text-[49px] leading-[58.8px] my-[116px] text-center">
        Seu dinheiro investido em{" "}
        <span className="font-medium">{informations?.time}</span> meses, a uma
        taxa de juros de{" "}
        <span className="font-medium">{informations?.interestRate}%</span>, teve
        o incrível rendimento abaixo:
      </h1>
      <div className="flex w-full gap-[30px] h-full">
        <section className="flex flex-col gap-[116px] items-start justify-between w-full relative z-10">
          <div className="grid grid-cols-2 grid-rows-2 gap-[30px]">
            <RenderList
              items={simulationResult}
              renderItem={(opt) => (
                <ResultBlock
                  label={opt?.label || 0}
                  className={cn("min-w-[290px]", investmentType === 'price' && 'min-w-fit')}
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
        <div className="bg-m3-gray-200 h-[400px] w-px z-10 relative" />
        {/* ----- */}
        <section className="flex flex-col gap-[116px] items-end justify-between w-full relative z-10">
          <div
            className="w-full h-[350px] overflow-auto"
            id="table"
            ref={contentRef}
          >
            {
              investmentType === 'simple' && (

                <TableResult detailedResult={resultsByMounth || []} />
              )
            }

            {
              investmentType === 'price' && (

                <TableResultPrice detailedResultPrice={resultsByMounthPrice || []} />
              )
            }

          </div>

          <Button onClick={() => downloadPDF()} className="self-end">
            Gerar relátorio PDF
          </Button>
        </section>

        <PdfView ref={contentRef} className="hidden pdf-view" />
      </div>
    </WithHeaderLayout>
  );
};
