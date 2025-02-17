import { Logos } from "../_core/logos";

export const Header = () => {
  const { Completed } = Logos;

  return (
    <header className="flex items-center gap-3">
      <Completed />
      <span className="text-m3-secondary">
        Simulador de <br /> investimentos
      </span>
    </header>
  );
};
