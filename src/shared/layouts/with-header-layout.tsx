import { Logos } from "../components/_core/logos";
import { Wrapper } from "../components/_core/wrapper";
import { Header } from "../components/header";

type Props = React.PropsWithChildren & React.ComponentProps<"div">;

export const WithHeaderLayout = ({ children, ...props }: Props) => {
  const { SimbolAndM3 } = Logos;

  return (
    <Wrapper {...props} className="relative flex flex-col w-full h-full">
      <Header />
      {children}

      <SimbolAndM3
        tabIndex={-1}
        className="absolute bottom-1/2 right-1/2 translate-1/2 opacity-5 pointer-events-none"
      />
    </Wrapper>
  );
};
