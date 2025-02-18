import { useSimulationModel } from "./simulation-model";
import { SimulationView } from "./simulation-view";

export const SimulationViewModel = () => {
  const methods = useSimulationModel();
  return <SimulationView {...methods} />;
};
