import { cn } from "../../../shared/utils/cn";
import { storage } from "../../../shared/utils/storage";

import { Logos } from "../../../shared/components/_core/logos";
import { Wrapper } from "../../../shared/components/_core/wrapper";
import { TableResult } from "../../../shared/components/table-result/table-result.tsx";

type Props = React.ComponentProps<'div'>

export const PdfView = ({ ...props }: Props) => {

  const { Completed, SimbolAndM3 } = Logos;

  const resultsByMounth = storage.get("detailedResults");

  return (
    <Wrapper variant="pdf"  {...props} className={cn("relative", props.className)}>
      <header className="flex items-center gap-3 justify-between">
        <Completed className="w-[127px] h-[26px]" />

        <span className="text-xs"> Dúvidas entre em contato: +55 (31) 9 9749-2857</span>
      </header>

      <div className="my-14">
        <h2 className="text-center text-m3-secondary font-medium text-2xl">Só a M3Leding oferece</h2>

        <h3 className="text-center text-m3-secondary text-xl">
          Praticidade na hora de investir, e de buscar crédito.
        </h3>

      </div>
      <TableResult detailedResult={resultsByMounth || []} />

      {/* Logo on the background*/}
      <SimbolAndM3
        tabIndex={-1}
        className="absolute bottom-1/2 right-1/2 translate-1/2 opacity-5 pointer-events-none"
      />

    </Wrapper>
  )
}





