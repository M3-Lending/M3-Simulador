import { Select } from "./shared/components/select";
import { Input } from "./shared/components/input";

const investiment_options = [
  {
    label: "Simples",
    value: "simple",
  },
  {
    label: "Price",
    value: "price",
  },
];

function App() {
  return (
    <main className="h-screen w-screen">
      <Input
        placeholder="Ex: 1000"
        label="Quanto pretende investir?"
        variant="fail"
      />

      <div className="flex items-center justify-center w-full h-full">
        <Select options={investiment_options} />
      </div>
    </main>
  );
}

export default App;
