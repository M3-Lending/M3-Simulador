import { Route, Routes } from "react-router";
import { SimulationViewModel } from "./features/simulation/view/simulation-view-model";
import { SimulationResultViewModel } from "./features/simulation-result/view/simulation-result-view-model";

// eslint-disable-next-line react-refresh/only-export-components
export const PATHS = {
  RESULT: "resultado",
};

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<SimulationViewModel />} />
      <Route path={PATHS.RESULT} element={<SimulationResultViewModel />} />
    </Routes>
  );
};
