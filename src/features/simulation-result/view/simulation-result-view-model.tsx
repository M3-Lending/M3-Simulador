import { useSimulationResultModel } from "./simulation-result-model";
import { SimulationResultView } from "./simulation-result-view";

export const SimulationResultViewModel = () => {
  const methods = useSimulationResultModel();

  return <SimulationResultView {...methods} />;
};
