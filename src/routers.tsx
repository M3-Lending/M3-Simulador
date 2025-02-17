import { Route, Routes } from "react-router";
import { SimulationResultView } from "./features/simulation-result/view/simulation-result-view";
import { SimulationView } from "./features/simulation/simulation-view";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<SimulationView />} />
      <Route path="/resultado" element={<SimulationResultView />} />
    </Routes>
  );
};
