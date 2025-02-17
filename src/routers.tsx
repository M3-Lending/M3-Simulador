import { Route, Routes } from "react-router";
import { SimulationResultView } from "./features/simulation-result/view/simulation-result-view";
import { SimulationView } from "./features/simulation/view/simulation-view";

// eslint-disable-next-line react-refresh/only-export-components
export const PATHS = {
  RESULT: "resultado",
};

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<SimulationView />} />
      <Route path={PATHS.RESULT} element={<SimulationResultView />} />
    </Routes>
  );
};
