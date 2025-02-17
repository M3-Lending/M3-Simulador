import { SimulationResultView } from "./features/simulation-result/simulation-result";
import { SimulationView } from "./features/simulation/simulation-view";

// const investiment_options = [
//   {
//     label: "Simples",
//     value: "simple",
//   },
//   {
//     label: "Price",
//     value: "price",
//   },
// ];

function App() {
  return (
    <main className="h-screen w-screen">
      {/* <SimulationView /> */}
      <SimulationResultView />
    </main>
  );
}

export default App;
